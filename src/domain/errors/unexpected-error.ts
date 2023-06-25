export class UnexpectedError extends Error {
    constructor () {
      super('Unexpected Error, try again.')
      this.name = 'UnexpectedError'
    }
  }