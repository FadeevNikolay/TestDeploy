import React from 'react'
import c from './Message.module.css';

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={c.message}>
            <img src={props.avatar} alt="" className={c.logo} />
            <div className={c.messageContainer}>
                <div className={c.messageAuthor}>{props.name}</div>
                <div className={c.messageText}>{props.message}</div>
                <div className={c.messageTime}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message;
