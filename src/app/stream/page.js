"use client";
import Chat from "./chat";
import { useSearchParams } from "next/navigation";

export default function Stream() {
  let searchParams = useSearchParams();
  const videoUrl = searchParams.get("url");

  return (
    <main className="flex justify-between gap-3 mt-5 md:h-screen">
      <div className="flex-1">
        <iframe
          width="100%"
          height="75%"
          src={videoUrl}
          title="Build Your Own Video Streaming Platform | It&#39;s Easier Than You Might Think!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="">
        <Chat />
      </div>
    </main>
  );
}
