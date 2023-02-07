import { Address } from "../models/Address";
import DalInterface from "../utils/DalInterface";
import { config } from "../config/db.config";
const sql = require('mssql');

export class AddressDal implements DalInterface<Address> {
    getAll(): Promise<Address[]> {
        throw new Error("Method not implemented.");
    }

    getById(_: number): Promise<Address | null> {
        throw new Error("Method not implemented.");
    }

    async create(_: Address): Promise<Address | null> {
        throw new Error("Method not implemented.");
    }

    async update(id: number, data: Address): Promise<Address | null> {
        const sqlQuery = `
        UPDATE Address 
        SET street = '${data.street}', number = '${data.number}', complement = '${data.complement}', neighborhood = '${data.neighborhood}', city = '${data.city}', state = '${data.state}', zipcode = '${data.zipcode}'
        WHERE id = ${id}
        `
        const pool = await sql.connect(config);
        const result = await pool.request().query(sqlQuery);
        return result
    }

    async delete(id: number): Promise<boolean> {
        const sqlQuery = `
            DELETE FROM Address 
            WHERE id = ${id}
            `
        const pool = await sql.connect(config);
        const result = await pool.request().query(sqlQuery);

        return result
    }

}