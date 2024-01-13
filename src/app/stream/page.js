"use client";

import Chat from "./chat";
import UploadFile from "@/components/uploadFile";

export default function Stream() {
    return (
        <main className="flex  flex-col justify-between gap-3 mt-5 md:h-screen">
          <div className="flex-1">
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