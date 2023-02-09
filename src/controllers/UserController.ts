import { Request, Response } from 'express'
import { User } from '../models/User'
import { BadRequestException } from '../exceptions/Exceptions'

export class UserController {
  static async create(req: Request, res: Response) {

    try {

      const user = await new User().create(req.body)
      return res.status(201).json(user)

    }    
    catch(error: any) {

      if(error instanceof BadRequestException) 
        return res.status(400).json({ error: error.message })

      return res.status(500).json({ error: error.message })

    }
  }

  static async index(req: Request, res: Response) {
    try {

      const users = await new User().index()
      return res.status(200).json(users)

    }    
    catch(error: any) {
        return res.status(400).json({ error: error.message })
    }
  }

  static async show(req: Request, res: Response) {
    try {

      const user = await new User().show(req.params.id)
      return res.status(200).json(user)

    }    
    catch(error: any) {
      return res.status(400).json({ error: error.message })
    }
  }

  static async destroy(req: Request, res: Response) {
    try {

      await new User().destroy(req.params.id)
      return res.status(200)

    }    
    catch(error: any) {
        return res.status(400).json({ error: error.message })
    }
  }
}