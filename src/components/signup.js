import React, { Component } from "react";
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
      <form onSubmit={this.onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstname"> First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              placeholder="Enter first name"
              value={firstname}
              onChange={this.onChange} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastname"> Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              placeholder="Enter last name"
              value={lastname}
              onChange={this.onChange} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={this.onChange} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="password"
              value={password}
              onChange={this.onChange} />
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="btn btn-dark btn-block" />
        </div>
      </form>
    )
  }
}

export default SignUp
  
