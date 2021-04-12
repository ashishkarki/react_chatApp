import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import { PROJECT_ID } from './secrets'

function App() {
  return (
    <ChatEngine
      height='100vh'
      projectID={PROJECT_ID}
      userName=''
      userSecret=''
    />
  )
}

export default App
