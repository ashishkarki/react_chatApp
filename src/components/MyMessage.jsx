import MessageImage from './MessageImage'
import MessageText from './MessageText'

const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    // this is an image
    return <MessageImage imgSrc={message.attachments[0].file} />
  }

  return <MessageText msgText={message.text} />
}

export default MyMessage
