import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { Todo } from "../models/facade";

@Injectable()
export class TodoService{
    private http: Http;
    private mockTodos: Todo[] = [
        {"id": 1, "description": "first todo", "isCompleted": true}, 
        {"id": 2, "description": "second todo", "isCompleted": false}
    ];

    constructor(http: Http){
        this.http = http;
    }

    getTodos(): Todo[]{
        return this.mockTodos;
    }

    getTodosWithHttp(){
        // return this.http.get("/src/app/services/todos.json")
        //                 .toPromise()
        //                 .then(response => response.json().data);

        return this.http.get("/src/app/services/todos.json");
    }
}