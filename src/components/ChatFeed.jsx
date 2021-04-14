import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = props => {
  const { chats, activeChat, userName, messages } = props

  const chat = chats && chats[activeChat]

  const renderMessges = () => {
    const allMsgKeys = Object.keys(messages)

    return allMsgKeys.map((key, index) => {
      const curMessage = messages[key]
      const lastMsgKey = index === 0 ? null : allMsgKeys[index - 1]
      const isMyMsg = userName === curMessage.sender.username

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className='message-block'>
            {isMyMsg ? (
              <MyMessage message={curMessage} />
            ) : (
              <TheirMessage
                message={curMessage}
                lastMessage={allMsgKeys[lastMsgKey]}
              />
            )}
          </div>

          <div
            className='read-receipts'
            style={{
              marginRight: isMyMsg ? '18px' : '0',
              marginLeft: isMyMsg ? '0' : '68px',
            }}
          >
            Read receipts
          </div>
        </div>
      )
    })
  }

  if (!chat) return 'Loading....'

  return (
    <div className='chat-feed'>
      <div className='chat-title-container'>
        <div className='chat-title'>{chat?.title}</div>
        <div className='chat-subtitle'>
          {chat.people.map((person, idx) => (
            <div style={{ margin: '5px', display: 'inline-block' }} key={idx}>
              {person.person.username}
            </div>
          ))}
        </div>
      </div>

      {renderMessges()}

      <div style={{ height: '100px' }} />
      <div className='message-form-container'>
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  )
}

export default ChatFeed
