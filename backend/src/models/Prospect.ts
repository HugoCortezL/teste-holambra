import { Address } from "./Address"

export type Prospect = {
    id: number,
    name: string,
    document: string,
    email: string,
    phone: string,
    AddressId: Address,
}