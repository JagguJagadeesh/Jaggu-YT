import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";

// const videos = [
//   {
//     thumbnail: "https://via.placeholder.com/300x180",
//     title: "10 Tips for Better Coding",
//     channel: "CodeMaster",
//     views: "2.3M views",
//     uploadDate: "1 week ago",
//   },
//   {
//     thumbnail: "https://via.placeholder.com/300x180",
//     title: "Learn Tailwind CSS in 15 Minutes",
//     channel: "DesignPro",
//     views: "1.1M views",
//     uploadDate: "3 days ago",
//   },
//   {
//     thumbnail: "https://via.placeholder.com/300x180",
//     title: "React Basics: A Quick Guide",
//     channel: "Reactify",
//     views: "900K views",
//     uploadDate: "2 weeks ago",
//   },
//   {
//     thumbnail: "https://via.placeholder.com/300x180",
//     title: "Top 10 JavaScript Libraries",
//     channel: "JS World",
//     views: "2.8M views",
//     uploadDate: "1 month ago",
//   },
//   {
//     thumbnail: "https://via.placeholder.com/300x180",
//     title: "How to Create Stunning UIs",
//     channel: "UI Wizard",
//     views: "1.5M views",
//     uploadDate: "4 days ago",
//   },
//   {
//     thumbnail: "https://via.placeholder.com/300x180",
//     title: "The Art of Debugging",
//     channel: "BugFixer",
//     views: "800K views",
//     uploadDate: "3 weeks ago",
//   },
// ];



const VideoGrid = () => {
  const [ytvideos,setYTVideos] = useState<[]>([]);
  const navigate = useRouter();

  const getVideos = async ()=>{
    axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${process.env.NEXT_PUBLIC_YT_API_KEY!}`)
  .then(function (response) {
    // handle success
    // console.log(response.data.items.id);
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

  // console.log(ytvideos.map(v=>{console.log(v)}));
  return (
    <ScrollArea className="h-[31.6rem] ">
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ytvideos.map((video, index) => (
          <div
            key={index}
            onClick={()=>{navigate.push(`/video-preview/?slug=${video.id}`)}}
            className="bg-white cursor-pointer w-full rounded-lg shadow-md overflow-hidden"
          >
            {/* Thumbnail */}
            <iframe 
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${video.id}?autoplay=0`}
                    className="w-full h-[20rem] "
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
            </iframe>
            {/* Video Info */}
            <div className="p-4 text-black w-full h-full">
              <h3 className="text-md font-semibold truncate">{video.snippet.title}</h3>
              <p className="text-sm text-gray-500 truncate">
                Likes :{video.statistics.likeCount} | Views :{video.statistics.viewCount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default VideoGrid;
