export type TodoResult = {
  data: Todo[]
}


export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}
