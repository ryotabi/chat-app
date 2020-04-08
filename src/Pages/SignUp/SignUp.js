import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <Wrapper>
      <Title>~新規登録~</Title>
      <Formwrap>
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
        <Button type="submit">新規登録</Button>

      </Formwrap>
      <Linkwrap><Link to="/login">登録済みの方はこちら</Link></Linkwrap>
    </Wrapper>
  )
}

const Wrapper = styled.div`
height:600px;
background : linear-gradient(to bottom,skyblue,pink)
`

const Title = styled.h1`
margin:0;
font-size:48px;
font-family:serif;
text-align:center;
`

const Formwrap = styled.form`
text-align:center;
font-size:24px;
margin-top:50px;
`

const Emaillabel = styled.label`
margin-right:15px;
`

const Passwordwrap = styled.div`
margin-top:30px;
`

const Passwordlabel = styled.label`
margin-right:60px;
`


const Linkwrap = styled.div`
text-align:center;
margin-top:30px;
`

const Button = styled.button`
margin-top:30px;
background-image: linear-gradient(#6795fd 0%, #67ceff 100%);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  width:125px;
  height:30px;
  border:#6795fd;
  line-height:30px;
  text-align:center;
`

export default SignUp