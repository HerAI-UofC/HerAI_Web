import "../styles/profile.css";

const Profile = () => {
    console.log("HERE");
    return (
        <div>
            <h1>Profile</h1>
            <div>
                <h6>Email: </h6>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email@email.com"
                ></input>
                <button>Change</button>
            </div>
            <button>Delete Account</button>
        </div>
    );
};

export default Profile;
