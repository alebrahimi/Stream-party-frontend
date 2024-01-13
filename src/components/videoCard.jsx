import React from "react";
import Image from "next/image";

function videoCard({ description, title, img }) {
    return <div className="max-w-sm rounded-xl overflow-hidden shadow-md bg-slate-700">
        <Image className="w-full rounded" src={img} alt="video play" width={100} height={100} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-slate-100 text-base">
                {description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-around  text-slate-100 text-sm font-semibold">
            <button onClick={() => { }} className="bg-green-800 rounded px-3 py-1 mb-2">Stream</button>
            <button onClick={() => { }} className=" bg-blue-500 rounded px-3 py-1 mb-2">Edit</button>
            <button onClick={() => { }} className=" bg-red-700 rounded px-3 py-1 mb-2">Delete</button>
        </div>
    </div >;
}

export default videoCard;
