"use client"

import { authClient } from "../../../../lib/auth-client"
import { SignUpForm } from "@/app/components/auth/signup-form"
import { useState } from 'react';

const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState<File | null>(null);
   
    const signUp = async () => {
      const base64Image = image ? await convertImageToBase64(image) : undefined;
      const { data, error } = await authClient.signUp.email({ 
          email, 
          password, 
          name, 
          image: base64Image, 
       }, { 
          onRequest: (ctx) => { 
           //show loading
          }, 
          onSuccess: (ctx) => { 
            //redirect to the dashboard
          }, 
          onError: (ctx) => { 
            alert(ctx.error.message); 
          }, 
        }); 
    };
   
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
                        <SignUpForm/>
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