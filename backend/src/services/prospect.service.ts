import { ProspectDal } from "../data-access/prospect.dal";
import { Prospect, ApiResponse, ResponseType } from "../models";

export class ProspectService {
    prospectDal: ProspectDal
    constructor() {
        this.prospectDal = new ProspectDal()
    }

    async getAll(): Promise<ApiResponse> {
        const prospects = await this.prospectDal.getAll()
        return {
            statusCode: 200,
            type: ResponseType.Success,
            message: "Successfully to retrieve all the prospects",
            data: prospects
        }
    }

    async getById(id: number): Promise<ApiResponse> {
        const prospect = await this.prospectDal.getById(id)
        if (prospect) {
            return {
                statusCode: 200,
                type: ResponseType.Success,
                message: "Successfully to retrieve the prospect",
                data: prospect
            }
        }
        else {
            return {
                statusCode: 404,
                type: ResponseType.Error,
                message: "Can't retrieve the prospect with this id"
            }
        }
    }

    async create(data: Prospect): Promise<ApiResponse> {

        const prospect = await this.prospectDal.create(data)

        return {
            statusCode: 201,
            message: "Success to create the prospect",
            type: ResponseType.Success,
            data: {
                prospect
            }
        }

    }

    async update(id: number, data: Prospect): Promise<ApiResponse> {

        const prospect = await this.prospectDal.update(id, data)

        return {
            statusCode: 200,
            message: "Success to update the prospect",
            type: ResponseType.Success,
            data: {
                prospect
            }
        }

    }

    async delete(id: number): Promise<ApiResponse> {
        const success = await this.prospectDal.delete(id)

        if (!success) {
            return {
                statusCode: 400,
                message: "Can't delete the prospect",
                type: ResponseType.Error
            }
        }
        return {
            statusCode: 200,
            message: "Success to delete the prospect",
            type: ResponseType.Success
        }

    }
}