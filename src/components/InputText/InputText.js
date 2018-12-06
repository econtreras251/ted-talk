import React from 'react';
import './InputText.css';

class InputText extends React.Component{


    render(){
        return(
            <form className="form" onSubmit={this.props.onSendText} >
                <textarea className="textArea" name="text"></textarea>
                <div className="buttonsInput">
                    <button className="close" onClick={this.props.onCloseText}>Cerrar</button>
                    <button className="send" type="submit">Enviar</button>
                </div>
            </form>
        )
    }
}


export default InputText;