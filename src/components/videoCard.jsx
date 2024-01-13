import React from "react";
import Link from 'next/link';

function videoCard({ description, title, img, videoUrl }) {
    return <div className="max-w-sm rounded-xl overflow-hidden shadow-md bg-slate-700">
        {/* <Image className="w-full rounded" src={img} alt="video play" width={100} height={100} /> */}
        <iframe
            width="640"
            height="360"
            src={videoUrl}
            title="Build Your Own Video Streaming Platform | It&#39;s Easier Than You Might Think!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>;

        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-slate-100 text-base">
                {description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-around  text-slate-100 text-sm font-semibold">
            <Link href={`/stream?url=${videoUrl}`} className="bg-green-800 rounded px-3 py-1 mb-2">Stream</Link>
            <button onClick={() => { }} className=" bg-blue-500 rounded px-3 py-1 mb-2">Edit</button>
            <button onClick={() => { }} className=" bg-red-700 rounded px-3 py-1 mb-2">Delete</button>
        </div>
    </div >;
}

export default videoCard;
