'use client'
import {Avatar, AvatarImage} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle
 } from '@/components/ui/sheet';
import { MenuIcon,SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { MoonIcon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"

export default function NavBar() {
  const [search, setSearch] = useState('')
  const route = useRouter()
  // const { setTheme , theme } = useTheme()

  const handleSearch = ()=>{
    console.log(search)
    if(search !== '') route.push(`/${search}`)
  }

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <div className='w-full bg-gray-950'>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 ">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="sm:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className=''>
          <SheetTitle className='mb-6'>
          <Link href="/" className="flex justify-center" prefetch={false}>
          <Avatar className='w-24 rounded-md'><AvatarImage className='' src="/jaggu-high-resolution-logo.png" /></Avatar>
          </Link>
          </SheetTitle>
          <hr />
          <div className="grid gap-2 justify-center py-6">
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              About
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      {/* Logo in navbar */}
      <Link href="/" className="mr-6  text-white hidden items-center gap-1 sm:flex" >
      <Avatar className=' w-20 rounded-md'><AvatarImage className='' src="/jaggu-high-resolution-logo.png" /></Avatar>
      <p className='text-xl'>JagguWatch</p>
      </Link>

      {/* Search in navbar */}

      <div className='flex w-full text-white mx-4'>
        <Input type='text' placeholder='Search' className='rounded-l-full' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <Button className='rounded-r-full' onClick={handleSearch}><SearchIcon /></Button>
        {/* <Button onClick={toggleTheme} className='ml-4' variant="outline"  size="icon" aria-label="Toggle theme">
          <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100" }`} />
          <MoonIcon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0" }`} />
          <span className="sr-only">Toggle theme</span>
        </Button> */}
      </div>
      <nav className="ml-auto hidden sm:flex gap-6">
      <Link
          href="/auth/signin"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false} 
        >
          Signin
        </Link>
      <Link
          href="/auth/signup"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Signup
        </Link>
        <Link
          href="/yt/yt-profile"
          className=""
          prefetch={false}
        >
          <Avatar className='bg- rounded-full'><AvatarImage className='' src="https://github.com/shadcn.png" /></Avatar>
        </Link>
      </nav>
      </header>
    </div>
  );
}
