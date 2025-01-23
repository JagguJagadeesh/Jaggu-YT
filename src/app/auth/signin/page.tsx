'use client'
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar,AvatarImage } from '@radix-ui/react-avatar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function SignIN() {
  const [formData,setFormData] = useState({
    email:'',
    password:''
  })

  const handleSignIN = ()=>{
    console.log(formData)
    setFormData((d)=>({...d,email:'',password:''}))
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center m-auto bg-black'>
      <Card className=' w-96 px-2 py-4'>
        <CardHeader className='w-full flex flex-col gap-2 p-0 items-center'>
          <CardTitle>
          <Avatar>
            <AvatarImage className='w-24 rounded-md' src="/jaggu-high-resolution-logo.png" />
          </Avatar>
          </CardTitle>
          <CardDescription className='text-xl text-black font-sans'>Signin to account / <Link className='underline' href='/auth/signup'>Signup</Link></CardDescription>
        </CardHeader><hr className='my-4' />
        <CardContent>
          <Input onChange={(e)=>setFormData((data)=>({...data,email:e.target.value}))} value={formData.email} type='email' placeholder='Email' required />
        </CardContent>
        <CardContent>
          <Input onChange={(e)=>setFormData((data)=>({...data,password:e.target.value}))} value={formData.password} type='password' placeholder='Password' required />
        </CardContent>
        <CardFooter >
          <Button onClick={handleSignIN} className='w-full mt-6'>Signin</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignIN