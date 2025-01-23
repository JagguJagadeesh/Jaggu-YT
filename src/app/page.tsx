import {Avatar, AvatarImage} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { 
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle
 } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='w-screen '>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 ">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="sm:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
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
      <a href="/" className="mr-6 rounded-full hidden md:flex" >
      <Avatar className=' w-20 rounded-md'><AvatarImage className='' src="/jaggu-high-resolution-logo.png" /></Avatar>
      </a>
      <nav className="ml-auto hidden md:flex gap-6">
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
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          <Avatar className='rounded-full'><AvatarImage className='' src="https://github.com/shadcn.png" /></Avatar>
        </Link>
      </nav>
      </header>
    </div>
  );
}
