import React, { useState } from 'react'
import styled from 'styled-components'



const Room = () => {

  const [messages, setMessages] = useState([
    {
      user: "sgw",
      content: "simple text"
    },
    {
      user: "hnd",
      content: "simple text"
    }
  ])

  const [value, setValue]


    = useState('')


  return (
    <Wrapper>
      <Title>~チャットルーム~</Title>
      <Chatwrap>
        {
          messages.map(message => {
            return (

              <Chattext>
                <Name>{message.user}</Name>
                <Span></Span>
                <Textwrap><Text>{message.content}</Text></Textwrap>
              </Chattext>

            )
          })
        }
      </Chatwrap>
      <form onSubmit={(e) => {
        e.preventDefault()
        if (!value) {
          return;
        }

        setMessages([
          ...messages,
          {
            user: 'hana',
            content: value
          }

        ])

        setValue('')
      }}>
        <Formwrap>
          <Forminput
            onChange={e => setValue(e.target.value)}
            value={value}
            type="text">
          </Forminput>

          <Button type="submit">send</Button>
        </Formwrap>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
background:linear-gradient(to bottom,skyblue,pink);
height:1000px;
`

const Title = styled.h1`
width:100%;
font-size:48px;
text-align:center;
font-family:serif;
margin:0;
`

const Chatwrap = styled.ul`
width:80%;
margin:50px auto 0;
background:rgba(257,233,277,0.5);
height:auto;
border-radius:65px;
padding:30px 50px;
`

const Formwrap = styled.div`
margin-top:50px;
text-align:center;
`

const Forminput = styled.input`
display:block;
margin:0 auto;
width:87%;
height:50px;
`

const Button = styled.button`
margin-top:30px;
width:200px;
font-size:24px;
line-height:30px;
text-align:center;
height:30px;
color:white;
background-image: linear-gradient(#6795fd 0%, #67ceff 100%);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
border:#67ceff;
&::active{
  color:red;
}
`

const Chattext = styled.li`
display:block;
margin-bottom:30px;
`



const Name = styled.p`
color:block;
margin:0;
margin-left:15px;
`

const Span = styled.span`
display:block;
width:0;
height:0;
border-left:15px solid transparent;
border-right:15px solid transparent;
border-bottom:15px solid white;
margin-left:15px;
`

const Textwrap = styled.div`
width:100%;
background:white;
border-radius:10px;
padding:10px;
`

const Text = styled.p`
color:block;
margin:0;
`


export default Room