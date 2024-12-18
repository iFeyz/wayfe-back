"use server"
import { PrismaClient } from '@prisma/client'

export  async function getUsers() {
    const prisma = new PrismaClient()
    
    const clients = await prisma.user.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return clients
}