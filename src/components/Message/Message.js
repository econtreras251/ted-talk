import React from 'react';
import moment from 'moment';
import './Message.css';

class Message extends React.Component {

    render(){

        let dateFormat = moment(this.props.date).fromNow();

        return(
            <div className="rootMessage">

                <div className="user">
                    <figure>
                        <img className="avatar" alt="faker" src={this.props.picture} />
                    </figure>
                    <span className="displayName">{this.props.displayName}</span>
                    <span className="username">{this.props.username}</span>
                    <span className="date">{dateFormat}</span>
                </div>

                <h3>{this.props.text}</h3>

                <div className="buttons">

                    <div className="icon">
                        <span className="fa fa-reply"></span>
                    </div>

                    <div className="icon">
                        <span className="fa fa-retweet"></span>
                        <span className="num">{this.props.numRetweets}</span>
                    </div>

                    <div className="icon">
                        <span className="fa fa-star"></span>
                        <span className="num">{this.props.numFavorites}</span>
                    </div>
                </div>

            </div>
        )
    }
}

export default Message;