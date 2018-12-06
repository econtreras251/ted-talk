import React from 'react';
import './ProfileBar.css';

class ProfileBar extends React.Component {
    /*constructor(props){
        super(props)
    }*/

    render(){
        return(
            <div className="rootProfile">
                <figure>
                    <img className="avatarProfile" src={this.props.picture} alt="faker" />
                </figure>
                <span className="usernameProfile">Hola @{this.props.username}!</span>
                <button onClick={this.props.onOpenText} className="buttonProfile">
                    <span className="fa fa-lg fa-edit"></span> Tweet!
                </button>
            </div>
        )
    }
}

export default ProfileBar;