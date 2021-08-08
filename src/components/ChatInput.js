import { Button } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase';    

function ChatInput({channelName, channelId}) {

    const [input, setInput] = useState('');
    console.log(channelId);

    const sendMessage = e => {
        e.preventDefault(); //Prevents refresh

        if(!channelId){
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "semih chelik",
            userImage: "https://media.istockphoto.com/photos/background-elephant-picture-id479667835?s=612x612"
        });

        setInput("");
    };  

    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={ e => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        display: flex;
        justify-content: center;
        position: relative;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid grey;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;

    }
`;
