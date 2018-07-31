import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// We can import from just the folder because the default folder is index.js
import Login from "./Login/";
import MainContainer from "./MainContainer";

class App extends Component {
    constructor() {
    super();
    this.state = {
        logged: false,
        username: ""
    }
}

login = (username) => {
    // We will setStaet of this component, but we will call it in the login component.
    console.log("login function in app is working.", username);
    this.setState({
        username: username,
        logged: true
    });
}

render() {
    console.log(this.state);
    let logged = this.state.logged;
        return (
            <div className="App">
                {this.state.logged ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>} 
            </div>
        );
    }
}


export default App;