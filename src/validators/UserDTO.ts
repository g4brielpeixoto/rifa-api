import Joi from "joi"
import { BadRequestException } from '../exceptions/Exceptions'

export class UserDTO {
  static validate(data: any) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      pix: Joi.string().required(),
      pixType: Joi.string().equal("CPF", "CNPJ", "EMAIL", "PHONE", "RANDOM").required(),
      whatsapp: Joi.string().required(),
    })

    const { error } = schema.validate(data)
    if(!error) return data
    throw new BadRequestException(error.message)
  }
}