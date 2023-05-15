// Purpose: Contact page

import { Prisma, PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
import Link from "next/link"
import React, { FormEvent } from "react"

const prisma = new PrismaClient()


const Contact = async () => {
    const fetchContacts = async ()=>{
        // 'use server'
        const contacts = await prisma.contact.findMany()
        return contacts
    }
   const contacts = await fetchContacts()


    const handleSubmit = async (data:FormData)=>{
        'use server'
        const contact = await prisma.contact.create({
            data:{
                name:data.get('name') as string,
                email:data.get('email') as string,
                subject:data.get('subject') as string,
                message:data.get('message') as string,
            }
        })
        revalidatePath('/')
  
        
        console.log(contact)
     

    }
    
  return (

    
    <div>
        <h1>Contact</h1>
        {contacts?.map((contact,i)=>{
            return <p key={i}>
                <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
            {contact.email}
            {contact.subject}
            {contact.message}</p>
        })

        }

        <form style={{display:'flex',flexDirection: 'column'}} action={handleSubmit} className="flex flex-col bg-purple-200">
            <input type="text" className="" name="name" id="name" placeholder="name"/>
            <input type="text" className="" name="email" id="email" placeholder="email"/>
            <input type="text" className="" name="subject" id="subject" placeholder="subject"/>
            <textarea name="message" id="message" cols={30} rows={10} placeholder="message"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default Contact