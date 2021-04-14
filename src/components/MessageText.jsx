const MessageText = ({ msgText, msgStyle }) => {
  return (
    <div
      className='message'
      style={
        msgStyle
          ? msgStyle
          : {
              float: 'right',
              marginRight: '18px',
              color: 'white',
              backgroundColor: '#3B2A50',
            }
      }
    >
      {msgText}
    </div>
  )
}

export default MessageText
