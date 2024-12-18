"use server"
import { PrismaClient } from '@prisma/client'

export async function deleteUser(id: string) {
    try {
        const prisma = new PrismaClient()
        await prisma.user.delete({
            where: { id }
        })
        return { success: true }
    } catch (error) {
        return { success: false }
    }
}