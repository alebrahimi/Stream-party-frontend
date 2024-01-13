"use client";

import { useState, useEffect } from "react";

export default function UploadFile() {
  const [viecoTitle, setViecoTitle] = useState('');
  const [videoDiscrption, setVideoDiscrption] = useState('');
  const [vedioUpload, setVedioUpload] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const submiting = async (e) => {
    e.preventDefault();

    if ( viecoTitle === '' || videoDiscrption === '' || vedioUpload === '') {
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

    setViecoTitle('');
    setVideoDiscrption('');
    setVedioUpload('');
    setErrMsg('');
  }

  return (
    <>
      <div className="overflow-y-auto overflow-x-hidden albaslot fixed top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="absolute bg-slate-700 rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-slate-100 dark:text-white">
                Upload your video
              </h3>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-100 dark:text-white">
                    vedio title
                  </label>
                  <input
                    id="video-title"
                    name="video-title"
                    type="text"
                    onChange={(e) => setViecoTitle(e.target.value)}
                    value={viecoTitle}
                    className="bg-slate-700 border border-gray-300 text-slate-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-100 dark:text-white">
                    vedio discrption
                  </label>
                  <input
                    id="video-discrption"
                    name="video-discrption"
                    type="text"
                    onChange={(e) => setVideoDiscrption(e.target.value)}
                    value={videoDiscrption}
                    className="bg-slate-700 border border-gray-300 text-slate-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-100 dark:text-white">
                    select your video
                  </label>
                  <input
                    id="vedio-upload"
                    name="vedio-upload"
                    type="file"
                    onChange={(e) => setVedioUpload(e.target.value)}
                    value={vedioUpload}
                    required
                    className="bg-slate-700 border border-gray-300 text-slate-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>
                <p className="text-red-500 mb-2">{errMsg}</p>
                <button
                  type="submit"
                  onClick={submiting}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  upload
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
