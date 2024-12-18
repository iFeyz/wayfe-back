import { authClient } from "../../lib/auth-client";
import { LoginFormValues } from "../../lib/form-schema";
import { redirect } from "next/navigation";

export async function login(data: LoginFormValues) {
    let state : boolean = false
    try {
        const response = await authClient.signIn.email({ 
            email: data.email, 
            password: data.password, 
        }, { 
            onRequest: () => { 
                // Optional: Handle request start
            }, 
            onSuccess: () => { 
                state = true
            }, 
            onError: () => { 
                state = false
            } 
        });
        
        return state

    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "An unexpected error occurred"
        };
    }
}