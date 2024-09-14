import React, { useState } from 'react';
import EchoIcon from './echo-icon';


interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}


const ChatPanel: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello! How can I assist you today?', sender: 'bot' },
    { id: 2, text: 'Can you tell me more about the Echo project?', sender: 'user' },
    { id: 3, text: 'Of course! Echo is designed to deliver personalized assistance through advanced AI technology. What would you like to learn?', sender: 'bot' },
  ]);
  const [inputText, setInputText] = useState('');


  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
    };


    setMessages([...messages, newMessage]);
    setInputText('');


    // Simulate a bot response after sending
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          text: 'Let me get that information for you...',
          sender: 'bot',
        },
      ]);
    }, 1000);
  };


  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto h-screen bg-white shadow-lg rounded-lg">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
        <EchoIcon width={40} height={40} />
        <h2 className="text-lg font-semibold">EchoMind Chat</h2>
      </div>


      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-100">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.sender === 'bot' ? 'bg-blue-200 text-gray-900' : 'bg-indigo-500 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>


      {/* Input Box */}
      <div className="flex items-center p-4 bg-white border-t border-gray-200">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="ml-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};


export default ChatPanel;
```