import React, { Component } from "react";
import "./App.css";


class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if 
	(
      e.target.email.value === "mjmnoda@gmail.com" &&
      e.target.password.value === "qweasdzxc" 
	)
	{
	  alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
	}
	else if (!e.target.email.value)
	{
	 alert("The Email section must be filled!");
	}
	else if (!e.target.password.value) 
	{
      alert("Password is required");
    }
	else 
	{
      alert("Invalid account!");
    }
  };

  handleClick = e => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail: </label>
            <input type="email" name="email"/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
          </div>
          <button className="primary">Login</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          Register New Account
        </button>
      </div>
    );
  }
}

export default App;