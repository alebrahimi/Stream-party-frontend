"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function SignUp() {
    const [videoTitle, setVideoTitle] = useState('');
    const [videoDiscrption, setVideoDiscrption] = useState('');
    const [vedioUpload, setVedioUpload] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const submiting = async (e) => {
        e.preventDefault();
    
        if ( videoTitle === '' || videoDiscrption === '' || vedioUpload === '') {
          setErrMsg('Invalid Entry');
          return;
        }
    
        try {
          const response = await fetch('https://your-api-endpoint.com/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
      
          if (response.ok) {
            localStorage.setItem('jwt', response.jwt)
            console.log('Account created successfully!');
          } else {
            console.error('Account creation failed.');
            const data = await response.json();
            setErrMsg(data.message || 'Account creation failed. Please try again.');
          }
        } catch (error) {
          console.error('An error occurred while creating the account.', error);
          setErrMsg('An error occurred. Please try again.');
        }
    
        setVideoTitle('');
        setVideoDiscrption('');
        setVedioUpload('');
        setErrMsg('');
      }
    
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
            className="mx-auto h-10 w-auto"
            src='/logo.png'
            width={36}
            height={36}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-ellipsis">
            upload a new video
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="videoTitle" className="block text-sm font-medium leading-6 text-ellipsis">
                video title
              </label>
              <div className="mt-2">
                <input
                  id="videoTitle"
                  name="videoTitle"
                  type="text"
                  onChange={(e) => setVideoTitle(e.target.value)}
                  value={videoTitle}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="videoDiscrption" className="block text-sm font-medium leading-6 text-ellipsis">
                  video discrption
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="videoDiscrption"
                  name="videoDiscrption"
                  type="text"
                  onChange={(e) => setVideoDiscrption(e.target.value)}
                  value={videoDiscrption}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="vedioUpload" className="block text-sm font-medium leading-6 text-ellipsis">
                    selact your file
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="vedioUpload"
                  name="vedioUpload"
                  type="file"
                  onChange={(e) => setVedioUpload(e.target.value)}
                  value={vedioUpload}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <p className="text-red-500 mb-2">{errMsg}</p>

            <div>
              <button
                type="submit"
                onClick={submiting}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                upload file
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
