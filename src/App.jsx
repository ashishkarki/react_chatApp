import React from 'react'
import { ChatEngine } from 'react-chat-engine'

import './App.css'
import ChatFeed from './components/ChatFeed'
import { PROJECT_ID, users } from './secrets'
import { USER_TYPES } from './utils/constants'

function App() {
  const genericUser1 = users.find(
    user => user.type === USER_TYPES.GENERIC_USER_1
  )

  return (
    <ChatEngine
      height='100vh'
      projectID={PROJECT_ID}
      userName={genericUser1.username}
      userSecret={genericUser1.secret}
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
