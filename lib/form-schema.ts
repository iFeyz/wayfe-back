import { z } from "zod"

export type LoginFormValues = z.infer<typeof loginSchema>
export type SignUpFormValues = z.infer<typeof signupSchema>

export const loginSchema = z.object({
    email: z.string().email(),
    password: z
    .string()

})


export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: z.string().min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
    image: z.instanceof(File).nullable(),
    name: z.string().min(3, 'Name must be at least 3 characters'),

})