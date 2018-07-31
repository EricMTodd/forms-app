import React, { Component } from "react";
// {Component} destructuring --> ES6 destructuring.
// Now we have Component in a variable, otherwise we would hav to do React.Component.

class Login extends Component {
    constructor() {
        // Calling super lets you use this inside the constructor.
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

     handleChange = (e) => {
         // This is called computed properties, it is part of ES6. It is equivalent to:
         // let someObject = {};
         // someObject[username] = e.target.username/password
        this.setState({[e.target.name]: e.target.value});
    }
    
    handleSubmit = (e) => {
        // This will stop our form from submitting a request and refreshing the page.
        e.preventDefault();
        // We are invoking the login function that we created in teh App.js, then we sent it down as props in order to lift our state.
        this.props.login(this.state.username);

    };

    render() {
        console.log(this.state);
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="username"/>
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="password"/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
};


export default Login;