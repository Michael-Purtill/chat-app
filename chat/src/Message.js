import React from 'react';

class Message extends React.Component
{
    render() {
        return (
            <div>
                <h1 className="usrname">{this.props.usr}</h1>
                <p className="msg">{this.props.msg}</p>
            </div>
        );
    }
}

export default Message;