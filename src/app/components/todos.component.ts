import { Component } from "@angular/core";

import { TodosListComponent } from "./facade";
import { TodoService } from "../services/facade";

@Component({
    selector: "todos",
    templateUrl: "./todos.template.html",
    providers: [TodoService]
})
export class TodoComponent{

}