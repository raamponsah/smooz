import { PrismaClient } from '@prisma/client';
import React, { Suspense } from 'react'
const prisma = new PrismaClient()

const page = async () => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await res.json();
    console.log(data)
  return (
    <Suspense fallback={<p>loading...</p>}>

       <div className="flex flex-col  bg-purple-400">
       {
            data.map((datum: any,i: React.Key | null | undefined)=>{
               return <p key={i}>{datum.title}</p>
            })
        }
       </div>
    </Suspense>
  )
}

export default page