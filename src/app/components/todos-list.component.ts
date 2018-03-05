import { Component } from "@angular/core";

import { Todo } from "../models/facade";
import { TodoService } from "../services/facade";

@Component({
    moduleId: module.id,
    selector: "todos-list",
    templateUrl: "./todos-list.template.html"
})
export class TodosListComponent{
    todosList: Todo[];

    constructor(todosService: TodoService){
        this.todosList = todosService.getTodos();
    }
}