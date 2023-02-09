export class DefaultError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'DefaultError'
  }
}

export class NotFoundException extends DefaultError {
  constructor(message: string) {
    super(message)
    this.name = 'NotFoundException'
  }
}

export class UnauthorizedException extends DefaultError {
  constructor(message: string) {
    super(message)
    this.name = 'UnauthorizedException'
  }
}

export class ForbiddenException extends DefaultError {
  constructor(message: string) {
    super(message)
    this.name = 'ForbiddenException'
  }
}

export class BadRequestException extends DefaultError {
  constructor(message: string) {
    super(message)
    this.name = 'BadRequestException'
  }
}

export class InternalServerDefaultErrorException extends DefaultError {
  constructor(message: string) {
    super(message)
    this.name = 'InternalServerDefaultErrorException'
  }
}

export class NotImplementedException extends DefaultError {
  constructor(message: string) {
    super(message)
    this.name = 'NotImplementedException'
  }
}