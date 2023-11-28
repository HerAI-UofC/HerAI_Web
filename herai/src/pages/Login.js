
import { useNavigate } from "react-router-dom"
import React from 'react';

import { Authenticator } from '@aws-amplify/ui-react';

const Login = () => {
    const navigate = useNavigate()
    const redirectToSignup = () => {
        navigate('/signup')
    }
    return (
        <Authenticator>
          {({ signOut, user }) => (
            //what shows after login - Probably direct whats inside here to another page file  
            <main>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      );
}

export default Login
