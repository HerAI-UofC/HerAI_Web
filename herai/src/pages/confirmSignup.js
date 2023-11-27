import { useState } from 'react';
import  {Authenticator}  from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

const initialFormState = { code: "" }
const ConfirmSignup = () => {
    const [formData, setFormData] = useState(initialFormState);
    const navigate = useNavigate();
    const username = localStorage.getItem('username')
    const code = formData.code
    async function confirmSignUp() {
        try {
            await Authenticator.confirmSignUp(username, code);
            localStorage.clear();
            navigate('/posts', { replace: true })
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }
    return (
        <div className="grid max-w-screen-xl h-screen text-black m-auto place-content-center">
            <div className="w-[30rem] space-y-6">
                <label htmlFor='Confirmation Code'> Enter the confirmation code sent to your email </label>
                <input
                    onChange={e => setFormData({ ...formData, 'code': e.target.value })}
                    placeholder="code"
                    value={formData.code}
                    type="text"
                    className="border border-sky-500 p-2 rounded w-full shadow"
                />
            </div>
            <button className="border-2 bg-sky-700 border-none text-white p-2 mt-4 rounded m-auto" onClick={confirmSignUp}> Confirm</button>
        </div>
    )
}

export default ConfirmSignup