import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Book } from "../models/facade";

@Component({
    moduleId: module.id,
    selector: "book-form",
    templateUrl: "./bookForm.template.html"
})
export class BookFormComponent implements OnInit{
    model: Book = new Book(1, "Some name", "Some author", "Some description");

    bookForm: FormGroup;
    public submitted: boolean = false;
    
    constructor(){}

    onSubmit(model: Book, isValid: boolean){
        this.submitted = true;
        console.log(model, isValid);
    }

    newBook(){
        this.model = new Book(0, '', '', '');
    }

    ngOnInit(){
        this.bookForm = new FormGroup({
            name: new FormControl('book name', Validators.required),
            author: new FormControl('author name', Validators.required),
            publication: new FormControl('publication name is optional')
        });
    }
}