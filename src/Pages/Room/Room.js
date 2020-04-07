import React, { useState } from 'react'


const Room = () => {

  const [messages, setMessages] = useState([
    {
      user: "sgw",
      content: "simple text"
    },
    {
      user: "hdn",
      content: "simple text"
    }
  ])

  const [value, setValue]


    = useState('')


  return (
    <>
      <ul>
        {
          messages.map(message => {
            return (
              <li>
                {message.user}:{message.content}
              </li>
            )
          })
        }
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault()

        setMessages([
          ...messages,
          {
            user: 'hana',
            content: value
          }

        ])
      }}>
        <input
          onChange={e => setValue(e.target.value)}
          value={value}
          type="text"></input>
        <button type="submit">send</button>
      </form>
    </>
  )
}

export default Room