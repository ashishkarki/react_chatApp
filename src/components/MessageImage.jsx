const MessageImage = ({ imgSrc, imgStyle }) => {
  return (
    <img
      src={imgSrc}
      alt='message-attachment'
      className='message-image'
      style={imgStyle ? imgStyle : { float: 'right' }}
    />
  )
}

export default MessageImage
