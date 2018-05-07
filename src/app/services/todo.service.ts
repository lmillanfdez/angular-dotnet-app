import { Todo } from "../models/facade";

export class TodoService{
    private mockTodos: Todo[] = [
        {"id": 1, "description": "first todo", "isCompleted": true}, 
        {"id": 2, "description": "second todo", "isCompleted": false}
    ];

    getTodos(): Todo[]{
        return this.mockTodos;
    }
}