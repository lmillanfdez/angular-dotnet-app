export class Book{
    public id: number;
    public name: string;
    public author: string;
    public publication: string;

    constructor(id: number, name: string, author: string, publication: string){
        this.id = id;
        this.name = name;
        this.author = author;
        this.publication = publication;
    }
}