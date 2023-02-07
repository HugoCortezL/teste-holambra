import { Prospect } from "src/models/Prospect";
import DalInterface from "../utils/DalInterface";
import { config } from "../config/db.config";
const sql = require('mssql');
import { AddressDal } from "./address.dal";

export class ProspectDal implements DalInterface<Prospect> {

    addressDal: AddressDal
    constructor() {
        this.addressDal = new AddressDal()
    }

    async getAll(): Promise<Prospect[]> {
        const sqlQuery = `
        SELECT *
        FROM Prospect as p
        LEFT JOIN Address as a
        ON p.AddressId = a.id
        `
        const pool = await sql.connect(config);
        const result = await pool.request().query(sqlQuery);
        return result.recordset
    }

    async getById(id: number): Promise<Prospect | null> {
        const sqlQuery = `
        SELECT *
        FROM Prospect as p
        LEFT JOIN Address as a
        ON p.AddressId = a.id
        WHERE p.id = ${id}
        `
        const pool = await sql.connect(config);
        const result = await pool.request().query(sqlQuery);
        return result.recordset[0]
    }

    async create(data: Prospect): Promise<Prospect | null> {
        const sqlQuery = `
        INSERT INTO Address (street, number, complement, neighborhood, city, state, zipcode)
        VALUES ('${data.AddressId.street}', '${data.AddressId.number}', '${data.AddressId.complement}', '${data.AddressId.neighborhood}', '${data.AddressId.city}', '${data.AddressId.state}', '${data.AddressId.zipcode}');
        
        INSERT INTO Prospect (name, document, email, phone, AddressId)
        VALUES ('${data.name}', '${data.document}', '${data.email}', '${data.phone}', SCOPE_IDENTITY());
        
        `
        const pool = await sql.connect(config);
        const result = await pool.request().query(sqlQuery);
        return result
    }

    async update(id: number, data: Prospect): Promise<Prospect | null> {
        const prospect = await this.getById(id)
        await this.addressDal.update(Number(prospect?.AddressId), data.AddressId)
        const sqlQuery = `
        UPDATE Prospect
        SET name = '${data.name}', document = '${data.document}', email = '${data.email}', phone = '${data.phone}'
        WHERE id = ${id}
        `
        const pool = await sql.connect(config);
        const result = await pool.request().query(sqlQuery);
        return result
    }

    async delete(id: number): Promise<boolean> {
        const prospect = await this.getById(id)
        const sqlQuery = `
        DELETE FROM Prospect 
        WHERE id = ${id}
        `
        const pool = await sql.connect(config);
        const result = await pool.request().query(sqlQuery);
        await this.addressDal.delete(Number(prospect?.AddressId))
        return result
    }

}