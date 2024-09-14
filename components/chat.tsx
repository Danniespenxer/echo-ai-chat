import React, { useState } from 'react';


interface Message {
  user: string;
  text: string;
}


const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([{ user: 'AI', text: 'Welcome to Echo AI!' }]);
  const [input, setInput] = useState('');


  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage: Message = { user: 'You', text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');


      // Fetch AI response from the API
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_CHATBOT_API_URL || '', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });


        if (response.ok) {
          const data = await response.json();
          const aiMessage: Message = { user: 'AI', text: data.message };
          setMessages((prevMessages) => [...prevMessages, aiMessage]);
        } else {
          throw new Error('Error fetching AI response');
        }
      } catch (error) {
        console.error(error);
        const errorMessage: Message = { user: 'AI', text: 'Sorry, something went wrong!' };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };


  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-black bg-opacity-70 rounded-lg shadow-lg">
      {/* Messages */}
      <div className="messages h-64 overflow-y-auto mb-4 p-4 bg-black bg-opacity-50 rounded-md">
        {messages.map((msg, index) => (
          <div key={index} className={`${msg.user === 'AI' ? 'text-gold' : 'text-white'} mb-2`}>
            <strong>{msg.user}: </strong>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>


      {/* Input and Send Button */}
      <textarea
        className="w-full p-3 mb-4 text-gold bg-black border border-gold rounded-md"
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button
        className="w-full p-3 bg-gold text-black rounded-lg shadow-md hover:bg-yellow-500 transition"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
};


export default Chat;