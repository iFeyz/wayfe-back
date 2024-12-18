export type ContactFormIndividual = {
    id: string
    name: string
    city: string
    email: string
    phone: string
    message: string
    createdAt: Date
}

export type ContactFormEntreprise = {
    id: string
    companyName: string
    email: string
    phone: string
    message: string
    createdAt: Date
}
