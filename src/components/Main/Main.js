import React from 'react';
import faker from 'faker'; 
import uuid from 'uuid';
import MessageList from '../MessageList/MessageList';
import InputText from '../InputText/InputText';
import ProfileBar from '../ProfileBar/ProfileBar';

class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            openText: false,
            messages: [{
                id: uuid.v4(),
                text: 'Hola vale!',
                picture: faker.image.avatar(),
                displayName: 'Garen',
                username: 'vsd@nonreply.io',
                date: Date.now() - 280000,
                retweets: 0,
                favorites: 0
            }, 
            {   
                id: uuid.v4(),
                text: 'Que quieres?',
                picture: faker.image.avatar(),
                displayName: 'Arthas',
                username: 'hbd@replynow.oi',
                date: Date.now() - 180000,
                retweets: 0,
                favorites: 0
            }]
        };

        this.handleSendText = this.handleSendText.bind(this)
        this.handleCloseText = this.handleCloseText.bind(this)
        this.handleOpenText = this.handleOpenText.bind(this)
    }

    handleOpenText(event) {
        event.preventDefault();
        this.setState({ openText: true });
    }

    handleSendText(event) {
        event.preventDefault();

        let newMessage = {
            id: uuid.v4(),
            username: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            date: Date.now(),
            text: event.target.text.value,
            picture: this.props.user.photoURL
        }

        this.setState({
            messages: this.state.messages.concat(newMessage),
            openText: false
        })
    }

    handleCloseText(event) {
        event.preventDefault();
        this.setState({ openText: false })
    }

    renderOpenText() {
        if (this.state.openText) {
            return (
                <InputText 
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                />
            );
        }
    }

    render(){
        return(
            <div>
                <ProfileBar 
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText}
                /> 
                {this.renderOpenText()}
                <MessageList messages={this.state.messages} />
            </div>
        );
    }
}


export default Main;