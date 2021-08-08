import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));

    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img 
                    src="https://firebasestorage.googleapis.com/v0/b/dispark-87315.appspot.com/o/Dispark_transparent_logo.png?alt=media&token=57cb4afe-90c8-4713-8248-5a97b78ad302"
                    alt=""
                />
                <h1>Sign in to Dispark</h1>
                <p>login.dispark.com</p>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`; 

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white
    }
`;