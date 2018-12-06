import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="root">
                <h1 className="logo">Tweets</h1>
            </header>
        )
    }
}


export default Header;