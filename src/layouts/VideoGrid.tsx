import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const videos = [
  {
    thumbnail: "https://via.placeholder.com/300x180",
    title: "10 Tips for Better Coding",
    channel: "CodeMaster",
    views: "2.3M views",
    uploadDate: "1 week ago",
  },
  {
    thumbnail: "https://via.placeholder.com/300x180",
    title: "Learn Tailwind CSS in 15 Minutes",
    channel: "DesignPro",
    views: "1.1M views",
    uploadDate: "3 days ago",
  },
  {
    thumbnail: "https://via.placeholder.com/300x180",
    title: "React Basics: A Quick Guide",
    channel: "Reactify",
    views: "900K views",
    uploadDate: "2 weeks ago",
  },
  {
    thumbnail: "https://via.placeholder.com/300x180",
    title: "Top 10 JavaScript Libraries",
    channel: "JS World",
    views: "2.8M views",
    uploadDate: "1 month ago",
  },
  {
    thumbnail: "https://via.placeholder.com/300x180",
    title: "How to Create Stunning UIs",
    channel: "UI Wizard",
    views: "1.5M views",
    uploadDate: "4 days ago",
  },
  {
    thumbnail: "https://via.placeholder.com/300x180",
    title: "The Art of Debugging",
    channel: "BugFixer",
    views: "800K views",
    uploadDate: "3 weeks ago",
  },
];

const VideoGrid = () => {
  return (
    <ScrollArea className="h-[31.6rem] ">
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white w-full rounded-lg shadow-md overflow-hidden"
          >
            {/* Thumbnail */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-40 object-cover"
            />
            {/* Video Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold truncate">{video.title}</h3>
              <p className="text-sm text-gray-500 truncate">
                {video.channel} · {video.views} · {video.uploadDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default VideoGrid;
