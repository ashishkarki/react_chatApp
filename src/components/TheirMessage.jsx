import MessageImage from './MessageImage'
import MessageText from './MessageText'

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByThem =
    !lastMessage || lastMessage.sender.username !== message.sender.username

  return (
    <div className='message-row'>
      {isFirstMessageByThem && (
        <div
          className='message-avatar'
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}

      {message?.attachments?.length > 0 ? (
        <MessageImage
          imgSrc={message.attachments[0].file}
          imgStyle={{ marginLeft: isFirstMessageByThem ? '4px' : '48px' }}
        />
      ) : (
        <MessageText
          msgText={message.text}
          msgStyle={{
            float: 'left',
            backgroundColor: '#CABCDC',
            marginLeft: isFirstMessageByThem ? '4px' : '48px',
          }}
        />
      )}
    </div>
  )
}

export default TheirMessage
