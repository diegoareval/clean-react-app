export class AccessDeniedError extends Error {
    constructor () {
      super('Rejected Access!')
      this.name = 'AccessDeniedError'
    }
  }