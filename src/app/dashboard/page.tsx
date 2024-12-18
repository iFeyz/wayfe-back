"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
    const searchParams = useSearchParams()
    useEffect(() => {
        if (searchParams.get('showWelcome')) {
            toast.success('Account created successfully! Welcome aboard! 🎉')
        }
    }, [searchParams])

    return (
        <div className="h-[100vh] w-full flex items-center justify-center">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <Toaster />
    
        </div>
    );
  }
  