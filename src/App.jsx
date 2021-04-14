import React from 'react'
import { ChatEngine } from 'react-chat-engine'

import './App.css'
import ChatFeed from './components/ChatFeed'
import { PROJECT_ID, users } from './secrets'
import { USER_TYPES } from './utils/constants'

function App() {
  const adminUser = users.find(user => user.type === USER_TYPES.GENERIC_USER_1)

  return (
    <ChatEngine
      height='100vh'
      projectID={PROJECT_ID}
      userName={adminUser.username}
      userSecret={adminUser.secret}
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
