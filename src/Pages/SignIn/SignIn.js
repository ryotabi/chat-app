import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const SignIn = () => {
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
          ></input>
        </div>
        <Passwordwrap>
          <Passwordlabel htmlFor="password">パスワード</Passwordlabel>
          <input
            type="password"
            id="password"
            placeholder='password'
          ></input>
        </Passwordwrap>
        <Button type="submit">Login</Button>

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