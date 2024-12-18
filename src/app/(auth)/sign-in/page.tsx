"use client"


import { authClient } from "../../../../lib/auth-client"
import { LoginForm } from "@/app/components/auth/login-form";
import { useState } from 'react';

const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

export default function SignIn() {
   

   
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <a href="/" className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                         
                        </div>
                        Wayfe.
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-[400px] border shadow-lg rounded-lg p-6">
                        <LoginForm/>
                    </div>
                </div>
            </div>
            <div className="relative hidden  lg:block">
        <img
          src="/background.webp"
          alt="Image"
          className=" rounded-3xl absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
        </div>
    );
  }