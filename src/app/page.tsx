'use client'


import { Separator } from "@/components/ui/separator"
import VideoGrid from "@/layouts/VideoGrid";
import { FileArchiveIcon, HomeIcon, Library, ListCheck, Play, WatchIcon } from "lucide-react";
import Link from "next/link";



export default function Home() {
  

  return (
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
      <div className="ml-16 h-[31.8rem] flex px-2 py-1">
        <VideoGrid/>
      </div>
    </div>
  );
}
