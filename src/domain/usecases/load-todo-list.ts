export interface LoadTodoList {
    loadAll: () => Promise<LoadTodoList.Model[]>
  }
  
  export namespace LoadTodoList {
    export type Model = {
        userId: number
        id: number
        title: string
        completed: boolean
    }
  }