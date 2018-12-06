import React from 'react';
import 'normalize.css'
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import faker from 'faker'; 


class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                photoURL: faker.image.avatar(),
                email: 'econtreras@gmail.com',
                displayName: 'Edgar'

            }
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Main user={this.state.user}/>
            </div>
        )
    }
};

export default App;