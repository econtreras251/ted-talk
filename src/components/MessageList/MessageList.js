import React from 'react';
import Message from '../Message/Message';
import './MessageList.css'

class MessageList extends React.Component {

    helperMessage = ({ text, picture, displayName, date, username }) => {
            return (
                <Message 
                    text={text} 
                    picture={picture}
                    displayName={displayName}
                    username={username}
                    date={date}
                />
            )
    }

    render() {
        return(
            <div className="rootList">
                {this.props.messages.map((msg) => this.helperMessage(msg))}
            </div>
        )
    }
}



export default MessageList;