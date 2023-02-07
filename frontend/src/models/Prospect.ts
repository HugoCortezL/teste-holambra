import { Address } from "./Address"

export type Prospect = {
    id: number,
    name: string,
    document: string,
    email: string,
    phone: string,
    AddressId: Address,
}

export type ProspectView = {
    id: [number],
    name: string,
    document: string,
    email: string,
    phone: string,
    AddressId: number,
    street: string,
    number: string,
    complement: string,
    neighborhood: string,
    city: string,
    state: string,
    zipcode: string
}