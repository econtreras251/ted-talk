import React from 'react';
import Message from '../Message/Message';
import './MessageList.css'

class MessageList extends React.Component {

    generateTweet = ({ text, picture, displayName, date, username, id, retweets, favorites }) => {
            return (
                <Message 
                    key={id}
                    text={text} 
                    picture={picture}
                    displayName={displayName}
                    username={username}
                    date={date}
                    numRetweets={retweets}
                    numFavorites={favorites}
                />
            )
    }

    render() {
        return(
            <div className="rootList">
                {this.props.messages.map((msg) => this.generateTweet(msg)).reverse()}
            </div>
        )
    }
}



export default MessageList;