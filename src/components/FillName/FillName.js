import React from 'react';
import './FillName.css';

class FillName extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name:""
        }
    }

    render() {

        let date = new Date()

        return (
            <div className="FillName">
                <div className="label-field" >Insira seu Nome</div>
                <input 
                    className="name-textfield" 
                    type="text" 
                    onKeyPress={(event)=>{if(event.key==="Enter")this.props.enterFunction(this.state['name'], date.getTime())}}
                    value={this.state['name']}
                    onChange={(m)=>{this.setState({name:m.target.value})} }
                />
                <div className="save-container">
                    <div className="save-button" onClick={() => this.props.enterFunction(this.state['name'], date.getTime())}>Salvar</div>
                </div>

            </div>
        );
    }
}

export default FillName;