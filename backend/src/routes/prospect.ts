import express from 'express'
import { ProspectController } from '../controller/prospect.controller'

export const prospectRouter = express.Router()
const prospectController = new ProspectController()

prospectRouter.get("/prospects", prospectController.getAll)

prospectRouter.get("/prospects/:id", prospectController.getById)

prospectRouter.post("/prospects", prospectController.create)

prospectRouter.put("/prospects/:id", prospectController.update)

prospectRouter.delete("/prospects/:id", prospectController.delete)