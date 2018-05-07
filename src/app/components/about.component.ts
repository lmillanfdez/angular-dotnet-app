import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "about",
    templateUrl: "./about.template.html"
})
export class AboutComponent{
    appName: string;

    constructor(){
        this.appName = "ASP.NET MVC application using Angular";
    }
}