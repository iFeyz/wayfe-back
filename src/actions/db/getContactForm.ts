"use server"
import { PrismaClient } from "@prisma/client"

// Create a single instance of PrismaClient
const prisma = new PrismaClient()

export async function getContactForm(contactFormTable: string) {
    // Use dynamic table access based on the parameter
    const contactFormData = await prisma[contactFormTable].findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return contactFormData
}