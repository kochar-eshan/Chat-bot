import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import LoadingGIF from '../assets/Loading_icon.gif';

export function ChatInput({ chatMessages, setChatMessage }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    setInputText('');

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
      },
    ];
    setChatMessage([
      ...newChatMessages,
      {
        message: <img src={LoadingGIF} className='loading-gif' />,
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessage([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ]);
    // setInputText('');
  }

  return (
    <div className='chat-input-container'>
      <input
        placeholder='write your message'
        size='30'
        onChange={saveInputText}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            sendMessage();
          } else if (event.key === 'Escape') {
            setInputText('');
          }
        }}
        value={inputText}
        className='chat-input'
      />
      <button className='send-button' onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
