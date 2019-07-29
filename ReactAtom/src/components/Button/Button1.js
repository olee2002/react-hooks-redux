import React, { Component } from 'react';
import ButtonName from './ButtonName';


class Button1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',


        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.displayNameHandler = this.displayNameHandler.bind(this);

    }


    handleClick = function () {
        alert("name is: " + this.state.name);
        this.setState({
            condition: !this.state.condition,

        });
    }



    displayNameHandler = (e) => {
        let t1 = e.target.value;
        this.setState({ name: t1 });
    }




    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            showname: true,

        });
    }

    render() {
        return (
            <div className="button1">
                <form onSubmit={this.handleSubmit}>
                    <input className="int" type="text" name="name" onChange={this.displayNameHandler} value={this.state.name} />
                    <br></br>
                    <br></br>

                    <ButtonName buttonText={this.state.name} type="submit" onClick={this.handleClick}
                        className={this.state.condition ? "button toggled" : "button"}  >{this.state.name}</ButtonName>

                    <br></br>
                </form>

            </div>
        );
    }
}
export default Button1;