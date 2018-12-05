import React from 'react';
import 'normalize.css'
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
};

export default App;