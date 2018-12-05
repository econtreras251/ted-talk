import React from 'react';
import faker from 'faker'; 
import MessageList from '../MessageList/MessageList';

class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            messages: [{
                text: 'Indignado estoy',
                picture: faker.image.avatar(),
                displayName: 'Genji',
                username: 'vsd@nonreply.io',
                date: Date.now() - 180000
            }, 
            {
                text: 'A Quien le importa eso?',
                picture: faker.image.avatar(),
                displayName: 'Lucio',
                username: 'hbd@replynow.oi',
                date: Date.now() - 280000
            }]
        };
    }


    render(){
        return(
            <MessageList messages={this.state.messages} />
        )
    }
}


export default Main;