
import React from 'react';


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="w-full">
        <h1 className="text-4xl">Echo AI Chatbot</h1>
      </header>


      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <section className="w-full max-w-4xl p-6 bg-black bg-opacity-70 rounded-lg shadow-lg">
          <div className="logo mb-6">
            <img src="/path/to/logo.png" alt="Echo AI Logo" className="animate-spin-slow w-32 h-32" />
          </div>


          <div className="chatbox p-6 bg-black bg-opacity-70 rounded-lg shadow-lg">
            <p className="mb-4 text-lg">Start chatting with Echo AI!</p>
            <textarea
              className="chat-input mb-4 w-full p-3 text-gold bg-black border border-gold rounded-md"
              rows={4}
              placeholder="Type your message..."
            />
            <button className="bg-gold text-black p-3 rounded-lg shadow-md hover:bg-yellow-500">Send</button>
          </div>
        </section>
      </main>


      <footer className="w-full">
        <p>Powered by Echo AI</p>
      </footer>
    </div>
  );
};


export default Home;
```