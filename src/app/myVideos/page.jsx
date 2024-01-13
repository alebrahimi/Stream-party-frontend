'use client'
import React, { useEffect } from "react";
import VideoCard from '../../components/videoCard';
import { useUserStore } from "../../store/useUser";
import { useRouter } from 'next/navigation'
import { videosData } from "./videosData"

function MyVideos() {
   const user = useUserStore((state) => state.user);
   const router = useRouter()

   useEffect(() => {

      if (!user) {
         router.push("/logIn")
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [user])

   if (!user) return null
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
         {videosData.map((video, index) => {
            return <VideoCard key={index} {...video} />
         })}
      </div>
   );
}

export default MyVideos;
