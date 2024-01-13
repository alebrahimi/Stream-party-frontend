"use client";

import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState(['hi', 'bey', 'hello from another sidehello from another sidehello from another sidehello from another sidehello from another side','hi', 'bey', 'hello from another side','hi', 'bey', 'hello from another side','hi', 'bey', 'hello from another side','hi', 'bey', 'hello from another side','hi', 'bey', 'hello from another side']);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    
  }
  return (
    <div className="mt-4 absolute bottom-0 -z-10">
      <ul className="list-none pl-4">
        {messages.map((msg, index) => (
          <li key={index} className="text-gray-50">{msg}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage} className="mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 ml-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
