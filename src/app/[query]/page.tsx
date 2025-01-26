'use client'


import { Separator } from '@radix-ui/react-separator';
import axios from 'axios';
import { FileArchiveIcon, HomeIcon, Library, ListCheck, Play, WatchIcon } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function SearchResults() {
    const [ytvideos,setYTVideos] = useState<[]>([]);
    const params = useParams()
    console.log(params.query)

    const getVideos = async ()=>{
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${params.query}&key=${process.env.NEXT_PUBLIC_YT_API_KEY!}`)
      .then(function (response) {
        // handle success
        console.log(response.data.items);
        setYTVideos(response.data.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      }
    
      useEffect(()=>{
        getVideos();
      },[])
    
  return (
    <div className='flex'>
      
      <div className='flex  text-white bg-black'>
      {/* SideBar */}
      <div className="bg-gray-950 h-[31rem] flex mb-auto px-4  ">
      <div className="h-[31.6rem] w-full overflow-y-auto flex flex-col gap-4 items-center pt-4 ">
        <Link href='/' className="">
          <HomeIcon/>
        </Link>
        <Link href='/' className="">
          <Library/>
        </Link>
        <Link href='/' className="">
          <Play/>
        </Link>
        <Separator/>
        <Link href='/' className="">
          <WatchIcon/>
        </Link>
        <Link href='/' className="">
          <ListCheck/>
        </Link>
        <Link href='/' className="">
          <FileArchiveIcon/>
        </Link>
        <Separator/>
        <Link href='/' className="">
          ...
        </Link>
      </div>
      </div>
      {/* Main */}
      <div className=" flex ">
      {/* <ScrollArea className=" "> */}
      <div className="flex flex-col gap-6">
        {ytvideos.map((video, index) => (
          <div
            key={index}
            className="bg-black text-white flex w-auto rounded-lg shadow-md overflow-hidden"
          >
            {/* Thumbnail */}
            <iframe 
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${video.id.videoId}?autoplay=0`}
                    className="w-[42rem] h-[18rem] "
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
            </iframe>
            {/* Video Info */}
            <div className="pl-2 text-white w-full ">
              <h3 className="text-lg font-semibold truncate mt-4">{video.snippet.channelTitle}</h3>
              <h3 className="text-md font-semibold truncate mt-4">{video.snippet.title}</h3>
              <p className="text-sm text-gray-100 truncate mt-2">
                Discription: {video.snippet.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    {/* </ScrollArea> */}
      </div>
    </div>
    </div>
  )
}

export default SearchResults