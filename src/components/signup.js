import React, { Component } from "react";
import './Login.css';
const API = 'http://localhost:5000/api/users'

class SignUp extends Component {

    state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      id: 0
    }
  
    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    onSubmit = (e) => {
      const user = { ...this.state }
      if (user.firstname !== '' && user.lastname !== '' && user.email !== '' && user.password !== '') {
        console.log(user);
        e.preventDefault()
        fetch(API, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(user), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .then(this.props.history.push("/courses"))
      }
    }

  render() {
    const { firstname, lastname, email, password } = this.state
    return (
      <div className="container">
      <form onSubmit={this.onSubmit}>
          <div className="form-row arkalogin">
        <div class="loginbaslik">Please Sign up</div>
          <div className="form-group">
            <label htmlFor="firstname"> First Name</label>
            <input
              type="text"
              className="form-control giris"
              name="firstname"
              placeholder="Enter first name"
              value={firstname}
              onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastname"> Last Name</label>
            <input
              type="text"
              className="form-control giris"
              name="lastname"
              placeholder="Enter last name"
              value={lastname}
              onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control giris"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control giris"
              name="password"
              placeholder="password"
              value={password}
              onChange={this.onChange} />
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="btn btn-dark btn-block butonlogin" />
        </div>
      </form>
      </div>
    )
  }
}

export default SignUp
  
