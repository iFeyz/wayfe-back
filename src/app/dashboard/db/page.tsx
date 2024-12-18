import { ClientTable } from "@/app/components/db/client-table";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[100vh] ">
            <div className="w-full h-full max-w-[600px]">
                <ClientTable />
            </div>
        </div>
    )
}