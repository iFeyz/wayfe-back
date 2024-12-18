import { authClient } from "../../lib/auth-client";
import { SignUpFormValues } from "../../lib/form-schema";
export async function signUp(data: SignUpFormValues) {
    
    let state : boolean = false
    try {
        const response = await authClient.signUp.email({ 
            email: data.email, 
            password: data.password,
            name: data.name,
            image: data.image,
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