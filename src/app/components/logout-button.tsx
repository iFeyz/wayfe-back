"use client"

import { authClient } from "../../../lib/auth-client"
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
    const router = useRouter()
    return (
        <button onClick={() => {
            authClient.signOut({
                fetchOptions: {
                    onSuccess: () => router.push('/')
                }
            })
        }}>Log out</button>
    )
}