import { useState } from 'react';
import { ChatInput } from './compoments/ChatInput.jsx';
import ChatMessages from './compoments/ChatMessages.jsx';
import './App.css';

function App() {
  const array = useState([]);
  const [chatMessages, setChatMessage] = array;
  if (chatMessages.length === 0) {
    return (
      <div className='app-container'>
        <div className='starting-screen'>
          <p className='starting-text'>
            Welcome to the chatbot project! Send a message using the textbox
            below.
          </p>
        </div>

        <ChatInput
          chatMessages={chatMessages}
          setChatMessage={setChatMessage}
        />
      </div>
    );
  }

  return (
    <div className='app-container'>
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessage={setChatMessage} />
    </div>
  );
}

export default App;
