import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import firebase from '../../config/firebase.js'
import { AuthContext } from '../../AuthService.js'


const SignIn = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  const user = useContext(AuthContext)
  if (user) {
    return <Redirect to='/' />
  }

  return (
    <Wrapper>
      <Title>~ログイン~</Title>
      <Form>
        <div>
          <Emaillabel htmlFor="email">メールアドレス</Emaillabel>
          <input
            type="email"
            id="email"
            placeholder='email'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          ></input>
        </div>
        <Passwordwrap>
          <Passwordlabel htmlFor="password">パスワード</Passwordlabel>
          <input
            type="password"
            id="password"
            placeholder='password'
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          ></input>
        </Passwordwrap>
        <Button type="submit"
          onClick={handleSubmit}
        >Login</Button>

      </Form>
      <Linkwrap>
        <Link to="/signup">新規登録はこちら</Link>
      </Linkwrap>
    </Wrapper>
  )
}

const Wrapper = styled.div`
height:600px;
background : linear-gradient(to bottom,skyblue,pink)
`
const Title = styled.h1
  `
  width:100%;
font-size:48px;
text-align:center;
margin:0;
font-family: serif;

`

const Form = styled.form`
margin-top: 50px;
text-align:center;
font-size:24px;


`


const Linkwrap = styled.div`
text-align:center;
margin-top:30px;
`

const Emaillabel = styled.label`
margin-right:15px;

`

const Passwordwrap = styled.div`
margin-top:30px;
`

const Passwordlabel = styled.label`
margin-right:60px
`

const Button = styled.button`
background-image: linear-gradient(#6795fd 0%, #67ceff 100%);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  width:125px;
  height:30px;
  line-height:30px;
  text-align:center;
  margin-top:30px;
  border: #67ceff;
`







export default SignIn