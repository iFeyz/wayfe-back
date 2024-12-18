

import { auth } from "../../../lib/auth"
import { authClient } from "../../../lib/auth-client"
import { headers } from "next/headers"
import { redirect } from 'next/navigation'
import LogoutButton from "../components/logout-button"
import { AppSidebar } from "../components/navigation/sidebar"


async function ServerComponent() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if(!session) {
        redirect('/')
    }
    return (
        <>
        </>
    )
}

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <AppSidebar />  
            <ServerComponent />
            {children}
        </div>
    )
}