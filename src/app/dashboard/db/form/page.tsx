import { FormTable } from "@/app/components/db/form-table";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[100vh] ">
            <div className="w-full h-[100vh] max-w-[600px]">
                <FormTable ContactFormTable="contactEntreprise" />
                <FormTable ContactFormTable="contactIndividual" />
            </div>
        </div>
    )
}