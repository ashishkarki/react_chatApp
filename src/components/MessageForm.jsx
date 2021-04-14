import { useState } from 'react'

const MessageForm = () => {
  const [userMsg, setUserMsg] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='message-input'
        placeholder='type your message'
        value={userMsg}
        onChange={setUserMsg}
        onSubmit={handleSubmit}
      />
    </form>
  )
}

export default MessageForm
