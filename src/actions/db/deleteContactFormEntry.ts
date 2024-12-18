"use server"
import { PrismaClient } from "@prisma/client"

// Create a single instance of PrismaClient
const prisma = new PrismaClient()

export async function deleteContactFormEntry(contactFormTable: string, id: string) {
    try {
        const contactFormData = await prisma[contactFormTable].delete({
            where: {
                id: id
            }
        })
        return { success: true }
    } catch (error) {
        return { success: false }
    }

}