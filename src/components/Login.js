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
                    src="https://firebasestorage.googleapis.com/v0/b/dispark-87315.appspot.com/o/Dispark_logo_animation.svg?alt=media&token=5b70354f-408c-4ab7-81e0-9ae2de7226cd"
                    alt=""
                />
                <h1>Sign in to Dispark</h1>

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
    padding: 10px;
    text-align: center;
    background-color: white;
    border-radius: 20px;

    > img {
        object-fit: contain;

        height: 400px;
    }

    > button {
        margin-top: 10px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white
    }
`;