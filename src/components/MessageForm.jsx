import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'
import { SendOutlined, PicCenterOutlined } from '@ant-design/icons'

const MessageForm = props => {
  const [value, setValue] = useState('')
  const { chatId, creds } = props

  const handleChange = event => {
    setValue(event.target.value)

    // isTyping(props, chatId) // throws 429: too many requests error from axios
  }

  const handleSubmit = event => {
    event.preventDefault()

    const text = value.trim()

    if (text.length > 0) {
      sendMessage(creds, chatId, { text })
    }

    setValue('')
  }

  const handleUpload = e => {
    sendMessage(creds, chatId, { files: e.target.files, text: '' })
  }

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='message-input'
        placeholder='type your message'
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <label htmlFor='upload-button'>
        <span className='image-button'>
          <PicCenterOutlined className='picture-icon' />
        </span>
      </label>
      <input
        type='file'
        multiple={false}
        id='upload-button'
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
      <button type='submit' className='send-button'>
        <SendOutlined className='send-icon' />
      </button>
    </form>
  )
}

export default MessageForm
