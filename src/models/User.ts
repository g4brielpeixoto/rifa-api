import { PrismaClient } from '@prisma/client'
import { UserDTO } from '../validators/UserDTO'

const prisma = new PrismaClient()

export class User {
  async create(data: any) {
    try {
      data = UserDTO.validate(data)
      const newUser = await prisma.user.create({
        data
      })
      return newUser
    }
    catch(error: any) {
      throw error
    }
  }

  async index() {
    try {
      const users = await prisma.user.findMany()
      return users
    }
    catch(error: any) {
      throw error
    }
  }

  async show(id: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: id
        }
      })
      return user
    }
    catch(error: any) {
      throw error
    }
  }

  async destroy(id: string) {
    try {
      const user = await prisma.user.delete({
        where: {
          id: id
        }
      })
      return user
    }
    catch(error: any) {
      throw error
    }
  }
}