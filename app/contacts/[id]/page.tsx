import { PrismaClient } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { Suspense } from 'react'
import loading from './loading'
import Link from 'next/link'
const prisma = new PrismaClient()

const Page = async ({params}:{params:any}) => {

   console.log(params)
   const fetchContact = async ()=>{
    const contact = prisma.contact.findUnique({
        where:{
            id:Number(params.id)
        }
    })
    return contact
}
const contact = await fetchContact()
  return (
    <Suspense fallback={<p>loading...</p>}>
        <h3>{contact?.name}</h3>
        <p>{contact?.email}</p>
        <p>{contact?.message}</p>
        <Link href={`/contacts/edit/${contact?.id}`}>Edit</Link>
    </Suspense>
  )
}

export default Page