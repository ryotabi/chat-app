import React from 'react'
import { Link } from 'react-router-dom'
const SignIn = () => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder='email'
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder='password'
          ></input>
        </div>
        <button type="submit">Login</button>

      </form>
      <Link to="/signup">Sign UP</Link>
    </>
  )
}

export default SignIn