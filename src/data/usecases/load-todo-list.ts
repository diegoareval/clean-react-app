import { HttpClient, HttpStatusCode } from '../protocols/http'
import { UnexpectedError, AccessDeniedError } from '@/domain/errors'
import {LoadTodoList} from '@/domain/usecases'

export class RemoteLoadTodoList implements LoadTodoList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadTodoList.Model[]>
  ) {}

  async loadAll (): Promise<RemoteLoadTodoList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const remoteTodoList = httpResponse.body || []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteTodoList.map(remoteTodo => ({
        ...remoteTodo,
      }))
      case HttpStatusCode.noContent: return []
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadTodoList {
  export type Model = {
    userId: number
    id: number
    title: string
    completed: boolean
  }
}