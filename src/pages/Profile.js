import { useEffect, useMemo, useState } from "react";
import "../styles/profile.css";
import {fetchUserAttributes, updateUserAttribute, confirmUserAttribute, deleteUser, signOut,} from "aws-amplify/auth";
import { uploadData, getUrl } from "aws-amplify/storage";
import { useNavigate } from "react-router-dom";

const DEFAULT_AVATAR = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

const DEFAULT_COVER = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=70";

const Profile = () => {
    const nav = useNavigate();
    const [userAttributes, setUserAttributes] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(DEFAULT_AVATAR);
    const [coverUrl, setCoverUrl] = useState(DEFAULT_COVER);

    // ===== email update (edit mode only) =====
    const [newEmail, setNewEmail] = useState("");
    const [code, setCode] = useState("");
    const [codeFailed, setCodeFailed] = useState(false);
    const [verificationSent, setVerificationSent] = useState(false);
    const [updateFailed, setUpdateFailed] = useState(false);

    // ===== profile edit =====
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [newName, setNewName] = useState("");
    const [profileUpdateError, setProfileUpdateError] = useState(false);
    const [profileUpdateErrorMsg, setProfileUpdateErrorMsg] = useState("");
    const [profileUpdateSuccess, setProfileUpdateSuccess] = useState(false);

    // ===== avatar upload =====
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState("");
    const [uploadingAvatar, setUploadingAvatar] = useState(false);

    // ===== cover upload =====
    const [coverFile, setCoverFile] = useState(null);
    const [coverPreview, setCoverPreview] = useState("");
    const [uploadingCover, setUploadingCover] = useState(false);

    // ===== delete confirm =====
    const [askAgain, setAskAgain] = useState(false);

    // ---------- helpers to refresh expired signed URLs ----------
    const isHttpUrl = (value) => typeof value === "string" && value.startsWith("http");

    const extractKeyFromSignedUrl = (signedUrl) => {
        try {
            const u = new URL(signedUrl);
            const path = decodeURIComponent(u.pathname || ""); 
            const match = path.match(/\/(public\/.+)$/);
            if (match?.[1]) return match[1]; 
            return null;
        } catch {
            return null;
        }
    };

    const makeFreshUrlFromStoredValue = async (storedValue, fallback) => {
        if (!storedValue) return fallback;
        if (!isHttpUrl(storedValue)) {
            try {
                const res = await getUrl({ path: storedValue });
                return res.url.toString();
            } catch (e) {
                console.log("getUrl failed for key:", storedValue, e);
                return fallback;
            }
        }

        // If it's an old signed URL, extract key then re-sign
        const extractedKey = extractKeyFromSignedUrl(storedValue);
        if (extractedKey) {
            try {
                const res = await getUrl({ path: extractedKey });
                return res.url.toString();
            } catch (e) {
                console.log("getUrl failed for extracted key:", extractedKey, e);
                return storedValue; 
            }
        }

        // If we can't extract anything, keep it
        return storedValue;
    };

    const getUserAttrs = async () => {
        try {
            const attributes = await fetchUserAttributes();
            setUserAttributes(attributes);

            // keep form fields in sync
            setNewName(attributes?.name || "");
            setNewEmail(attributes?.email || "");

            // Refresh avatar/cover so they work after sleep/reopen
            const freshAvatar = await makeFreshUrlFromStoredValue(attributes?.picture, DEFAULT_AVATAR);
            const freshCover = await makeFreshUrlFromStoredValue(attributes?.profile, DEFAULT_COVER);

            setAvatarUrl(freshAvatar);
            setCoverUrl(freshCover);
        } catch (e) {
            console.log(e);
        }
    };

    const openEdit = () => {
        setIsEditingProfile(true);

        setProfileUpdateError(false);
        setProfileUpdateSuccess(false);
        setProfileUpdateErrorMsg("");

        setVerificationSent(false);
        setCodeFailed(false);
        setUpdateFailed(false);
        setCode("");

        setNewName(userAttributes?.name || "");
        setNewEmail(userAttributes?.email || "");
    };

    const updateEmail = async (attributeKey, value) => {
        if (!userAttributes) return;
        if (!value) return;
        if (value === userAttributes.email) return;

        try {
            await updateUserAttribute({
                userAttribute: { attributeKey, value },
            });
            setUpdateFailed(false);
            setVerificationSent(true);
        } catch (error) {
            console.log("Update email failed:", error);
            setUpdateFailed(true);
        }
    };

    const confirmNewEmail = async ({ userAttributeKey, confirmationCode }) => {
        try {
            await confirmUserAttribute({ userAttributeKey, confirmationCode });
            setCodeFailed(false);
            window.location.reload();
        } catch (e) {
            console.log("Confirm email failed:", e);
            setCodeFailed(true);
        }
    };

    const uploadFileToS3AndGetUrl = async ({ file, folder }) => {
        if (!file) return null;

        const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
        const key = `public/${folder}/${Date.now()}.${ext}`;

        await uploadData({
            path: key,
            data: file,
            options: { contentType: file.type },
        }).result;

        // Return both key and a usable URL
        const urlResult = await getUrl({ path: key });
        return { key, url: urlResult.url.toString() };
    };

    const updateProfile = async () => {
        setProfileUpdateError(false);
        setProfileUpdateSuccess(false);
        setProfileUpdateErrorMsg("");

        try {
            // 1) Update name
            if ((userAttributes?.name || "") !== (newName || "")) {
                await updateUserAttribute({
                    userAttribute: { attributeKey: "name", value: newName },
                });
            }

            // 2) Upload avatar (if selected) and save the KEY into "picture"
            if (avatarFile) {
                setUploadingAvatar(true);
                const uploaded = await uploadFileToS3AndGetUrl({
                    file: avatarFile,
                    folder: "avatars",
                });

                await updateUserAttribute({
                    userAttribute: { attributeKey: "picture", value: uploaded.key },
                });

                setAvatarUrl(uploaded.url);
                setUploadingAvatar(false);
            }

            // 3) Upload cover (if selected) and save the KEY into "profile"
            if (coverFile) {
                setUploadingCover(true);
                const uploaded = await uploadFileToS3AndGetUrl({
                    file: coverFile,
                    folder: "covers",
                });

                await updateUserAttribute({
                    userAttribute: { attributeKey: "profile", value: uploaded.key },
                });

                setCoverUrl(uploaded.url);
                setUploadingCover(false);
            }

            setProfileUpdateSuccess(true);
            setIsEditingProfile(false);

            // Refresh attributes and fresh URLs
            await getUserAttrs();
        } catch (e) {
            console.log("Update profile failed:", e);
            setProfileUpdateError(true);
            setProfileUpdateErrorMsg(e?.message || JSON.stringify(e));
            setUploadingAvatar(false);
            setUploadingCover(false);
        }
    };

    const deleteAccount = async () => {
        try {
            await deleteUser();
            nav("/");
        } catch (e) {
            console.log("Delete account failed:", e);
        }
    };

    const userSignOut = async () => {
        try {
            await signOut();
            nav("/");
        } catch (e) {
            console.log("Sign out failed:", e);
        }
    };

    useEffect(() => {
        getUserAttrs();
    }, []);

    // cleanup preview object urls
    useEffect(() => {
        return () => {
            if (avatarPreview) URL.revokeObjectURL(avatarPreview);
            if (coverPreview) URL.revokeObjectURL(coverPreview);
        };
    }, [avatarPreview, coverPreview]);

    useEffect(() => {
        document.documentElement.classList.add("full-bleed");
        document.body.classList.add("full-bleed");
        return () => {
            document.documentElement.classList.remove("full-bleed");
            document.body.classList.remove("full-bleed");
        };
    }, []);

    const coverSrc = useMemo(() => coverPreview || coverUrl || DEFAULT_COVER, [coverPreview, coverUrl]);
    const avatarSrc = useMemo(() => avatarPreview || avatarUrl || DEFAULT_AVATAR, [avatarPreview, avatarUrl]);

    return (
        <div className="profile-page">
            <div className="profile-card">
                {/* ===== Cover image header ===== */}
                <div className="profile-cover">
                    <img className="profile-cover-img" src={coverSrc} alt="Cover" />
                    <div className="profile-cover-overlay" />
                </div>

                <div className="profile-header">
                    <div className="avatar-wrap">
                        <img className="profile-avatar" src={avatarSrc} alt="Profile avatar" />
                    </div>

                    <div className="profile-title">
                        <h1>Hello{userAttributes ? ", " + userAttributes.name : ""}!</h1>
                        <p className="profile-subtitle">Manage your account details below.</p>
                    </div>

                    <div className="profile-header-actions">
                        <button className="btn btn-ghost" onClick={openEdit}>
                            Edit profile
                        </button>
                        <button className="btn btn-ghost" onClick={userSignOut}>
                            Sign out
                        </button>
                    </div>
                </div>

                {/* ===== Edit Panel ===== */}
                {isEditingProfile ? (
                    <div className="edit-panel">
                        <div className="edit-grid edit-grid-single">
                            <div className="field">
                                <label className="label">Name</label>
                                <input
                                    className="input"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Email edit flow */}
                            <div className="field">
                                <label className="label">Email</label>

                                <div className="row">
                                    <input
                                        type="email"
                                        className={`input ${updateFailed ? "is-error" : ""}`}
                                        value={newEmail}
                                        onChange={(e) => {
                                            setNewEmail(e.target.value);
                                            setVerificationSent(false);
                                            setCodeFailed(false);
                                            setUpdateFailed(false);
                                        }}
                                        placeholder="you@example.com"
                                    />
                                    <button className="btn btn-primary" type="button" onClick={() => updateEmail("email", newEmail)}>
                                        Change
                                    </button>
                                </div>

                                {verificationSent ? (
                                    <div className="row row-tight">
                                        <input
                                            type="text"
                                            placeholder="Verification code (6 digits)"
                                            className={`input ${codeFailed ? "is-error" : ""}`}
                                            value={code}
                                            onChange={(e) => setCode(e.target.value)}
                                        />
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            onClick={() =>
                                                confirmNewEmail({
                                                    userAttributeKey: "email",
                                                    confirmationCode: code,
                                                })
                                            }
                                        >
                                            Verify
                                        </button>
                                    </div>
                                ) : null}

                                <div className="messages">
                                    {verificationSent ? <p className="msg">A verification code was sent to your new email.</p> : null}
                                    {updateFailed ? <p className="msg error">Please enter a valid email.</p> : null}
                                    {codeFailed ? <p className="msg error">Incorrect code.</p> : null}
                                </div>
                            </div>

                            {/* Avatar upload */}
                            <div className="field">
                                <label className="label">Profile photo</label>

                                <div className="avatar-edit-row">
                                    <img className="avatar-preview" src={avatarSrc} alt="Avatar preview" />

                                    <div className="avatar-actions">
                                        <input
                                            id="avatarUpload"
                                            type="file"
                                            accept="image/*"
                                            className="file-input"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (!file) return;

                                                if (file.size > 5 * 1024 * 1024) {
                                                    alert("Please choose an image under 5MB.");
                                                    return;
                                                }

                                                setAvatarFile(file);
                                                setAvatarPreview(URL.createObjectURL(file));
                                            }}
                                        />

                                        <label className="upload-btn" htmlFor="avatarUpload">
                                            Choose profile photo
                                        </label>

                                        <p className="hint">
                                            {uploadingAvatar ? "Uploading..." : avatarFile ? avatarFile.name : "PNG/JPG - max 5MB"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Cover upload */}
                            <div className="field">
                                <label className="label">Cover image</label>

                                <div className="cover-edit-row">
                                    <img className="cover-preview" src={coverSrc} alt="Cover preview" />

                                    <div className="cover-actions">
                                        <input
                                            id="coverUpload"
                                            type="file"
                                            accept="image/*"
                                            className="file-input"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (!file) return;

                                                if (file.size > 5 * 1024 * 1024) {
                                                    alert("Please choose an image under 5MB.");
                                                    return;
                                                }

                                                setCoverFile(file);
                                                setCoverPreview(URL.createObjectURL(file));
                                            }}
                                        />

                                        <label className="upload-btn" htmlFor="coverUpload">
                                            Choose cover photo
                                        </label>

                                        <p className="hint">
                                            {uploadingCover ? "Uploading..." : coverFile ? coverFile.name : "PNG/JPG - max 5MB"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {profileUpdateError ? <p className="msg error">Couldn't update profile: {profileUpdateErrorMsg}</p> : null}
                        {profileUpdateSuccess ? <p className="msg">Updated!</p> : null}

                        <div className="row edit-actions">
                            <button
                                className="btn btn-primary"
                                onClick={updateProfile}
                                disabled={uploadingAvatar || uploadingCover}
                                type="button"
                            >
                                {uploadingAvatar || uploadingCover ? "Saving..." : "Save"}
                            </button>

                            <button
                                className="btn btn-ghost"
                                type="button"
                                onClick={() => {
                                    setIsEditingProfile(false);

                                    setAvatarFile(null);
                                    setAvatarPreview("");
                                    setCoverFile(null);
                                    setCoverPreview("");

                                    setProfileUpdateError(false);
                                    setProfileUpdateSuccess(false);
                                    setProfileUpdateErrorMsg("");

                                    setVerificationSent(false);
                                    setCodeFailed(false);
                                    setUpdateFailed(false);
                                    setCode("");

                                    setNewEmail(userAttributes?.email || "");
                                    setNewName(userAttributes?.name || "");
                                }}
                                disabled={uploadingAvatar || uploadingCover}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : null}

                {/* ===== Non-edit view shows email read-only ===== */}
                {!isEditingProfile ? (
                    <div className="profile-section profile-section-offset">
                        <h2 className="section-title">Account</h2>

                        <div className="field">
                            <label className="label label-tight">Email</label>
                            <p className="profile-email">{userAttributes?.email || ""}</p>
                        </div>
                    </div>
                ) : null}

                {/* ===== Danger zone (EDIT mode only) ===== */}
                {isEditingProfile ? (
                    <>
                        <div className="profile-divider" />

                        <div className="profile-section danger danger-edit">
                            <h2 className="section-title">Danger zone</h2>

                            {!askAgain ? (
                                <button className="btn btn-danger" onClick={() => setAskAgain(true)}>
                                    Delete account
                                </button>
                            ) : (
                                <div className="confirm-box">
                                    <p className="confirm-text">
                                        Are you sure you want to permanently delete your account? This action is irreversible.
                                    </p>
                                    <div className="row">
                                        <button className="btn btn-danger" onClick={deleteAccount}>
                                            Yes, delete
                                        </button>
                                        <button className="btn btn-ghost" onClick={() => setAskAgain(false)}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default Profile;
