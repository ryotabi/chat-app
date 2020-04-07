import React from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <>
      <h1>SignUp</h1>
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
        <button type="submit">SignUp</button>

      </form>
      <Link to="/login">login</Link>
    </>
  )
}

export default SignUp