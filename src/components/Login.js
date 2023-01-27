import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div >
        <form action="http://localhost:5000/api/signin" method="POST">
            <label>email</label>
            <input type="email" name='email'/>
            <label>password</label>
            <input type="password" name="password"/>
            <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default Login