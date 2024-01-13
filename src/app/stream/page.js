"use client";

import Chat from "./chat";

export default function Stream() {
    return (
        <main className="sm:grid grid-cols-4">
          <div className="col-span-3">
            <video width="100%" height="auto" className="text-slate-200" controls>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
          <div className="">
            <Chat />
          </div>
        </main>
    )
}