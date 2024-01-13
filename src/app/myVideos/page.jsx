'use client'
import React, {useEffect} from "react";
import VideoCard from '../../components/videoCard';
import {useUserStore} from "../../store/useUser";
import { useRouter } from 'next/navigation'

function MyVideos() {
   const user = useUserStore((state) => state.user);
   const router = useRouter()

   useEffect(() => {

      if(!user){
         router.push("/logIn")
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [user])

   if (!user) return null
  return <div><VideoCard /></div>;
}

export default MyVideos;
