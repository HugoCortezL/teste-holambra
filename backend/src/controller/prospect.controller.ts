import { Request, Response } from 'express';
import { ProspectService } from '../services/prospect.service';

export class ProspectController {
    async getAll(_: Request, res: Response) {
        const service = new ProspectService()
        const result = await service.getAll()
        res.status(result.statusCode).send(result)
    }

    async getById(req: Request, res: Response) {
        const service = new ProspectService()
        const id = req.params.id || -1
        const result = await service.getById(Number(id))
        res.status(result.statusCode).send(result)
    }

    async create(req: Request, res: Response) {
        const service = new ProspectService()
        const prospect = req.body
        const result = await service.create(prospect)
        res.status(result.statusCode).send(result)
    }

    async update(req: Request, res: Response) {
        const service = new ProspectService()
        const prospect = req.body
        const id = req.params.id || ""
        const result = await service.update(Number(id), prospect)
        res.status(result.statusCode).send(result)
    }

    async delete(req: Request, res: Response) {
        const service = new ProspectService()
        const id = req.params.id || ""
        const result = await service.delete(Number(id))
        res.status(result.statusCode).send(result)
    }
}