import React, { Component } from 'react';

class Form extends Component {

    state = {
        email: "",
        message: false
    }

    changeHandler = (e) => {
        this.setState({email: e.target.value})
    }

    checkedHandler = (e) => {
        this.setState({message: e.target.checked})
    }

    sendInfor = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const validateEmail = re.test(this.state.email);
        const validateName = this.state.message;
        
        if(!validateEmail){
            alert("Email xato");
            return
        }

        if(!validateName){
            alert("Siz hamma qoidalarga rozi bulmadiz");
            return
        }

        this.setState({email: "", message: ""});

        alert("Xush kelibsiz")
    }

    componentDidUpdate() {
        console.log(this.state);
    }
    

    render() {
        const {email, message,} = this.state
        // console.log(this.state);
        return (
            <div className="App">
                <h1>Form</h1>
                <input type="email" placeholder="Email" value={email} onChange={this.changeHandler} /> <br /> <br />
                <input type="checkbox" name="message" value={message} onChange={this.checkedHandler} /> vi prinimayte vse pravo  <br /> <br />
                <button type="submit" onClick={this.sendInfor} className="decr">Otpravit</button>
            </div>
        );
    }
}

export default Form;