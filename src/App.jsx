import { useState } from 'react'
import './App.css'
import Main from '../components/Main'

function App() {
  const [count, setCount] = useState(0)
  const data = [
    {
      name: "Mark Webber",
      action: 'reacted to your recent post',
      to: 'My first tournament today!',
    },
    {
      name: "Angela Gray",
      action: 'followed you',
      // to: 'My first tournament today!',
    },
    {
      name: "Jacob Thompson",
      action: 'has joined your group',
      // to: 'My first tournament today!',
      group: 'Chess Club'
    },
    {
      name: "Jacob Thompson",
      action: 'sent you a private message',
      // to: 'My first tournament today!',
      group: 'Chess Club'
    },
  ]

  return (
    <>
      <div className="App">
        <div className="header">
          <p className="notification">Notifications <span className="bubble">3</span> </p>
          <p className="mark">Mark all as read</p>
        </div>
        <Main />
      </div>
      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Your Name Here</a>.
    </div>
    </>
  )
}

export default App
