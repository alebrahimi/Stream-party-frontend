"use client";

import Image from 'next/image';
import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState(['hi', 'bey', 'hello from another sidehello from another sidehello from another sidehello from another sidehello from another side','hi', 'bey', 'hello from another side','hi', 'bey', 'hello from another side','hi', 'bey', 'hello from another side','hi', 'bey', 'hello from another side','hi', 'bey', 'hello from another side','hi', 'bey', 'hello from another sidehello from another sidehello from another sidehello from another sidehello from another side','hi', 'bey', 'hello from another side','hi', 'bey', 'hello from another side','hi', 'bey', 'hello from another side','hi', 'bey', 'hello from another side','hi', 'bey', 'hello from another side']);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    // Your logic for sending the message goes here
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4 h-full">
        <ul className="list-none">
          {messages.map((msg, index) => (
            <li key={index} className="text-gray-50 pb-8">
              <div className="flex items-start gap-2.5">
                <Image width={36} height={36} className="w-8 h-8 rounded-full" src="/logo.png" alt="Jese image" />
                <div className="flex flex-col gap-1 w-full max-w-[320px]">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-slate-100 dark:text-white">Bonnie Green</span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                  </div>
                  <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-slate-700 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <p className="text-sm font-normal text-slate-100 dark:text-white"> That&apos;s awesome. I think our users will really appreciate the improvements.</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <form onSubmit={sendMessage} className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border bg-slate-700 text-slate-100 outline-0 rounded px-2 py-1 flex-1"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 ml-2 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
// bg-slate-700