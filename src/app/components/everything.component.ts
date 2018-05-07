import { Component } from "@angular/core";
import { Router, ActivatedRoute, ActivatedRouteSnapshot, Params } from "@angular/router"

@Component({
    moduleId: module.id,
    selector: "everything-pizza",
    templateUrl: "./everything.template.html",
    providers: [ActivatedRoute]
})
export class EverythingComponent{
    private size: String = "";

    constructor(private route: ActivatedRoute){
        route.params.subscribe((params: Params) => {
            this.size = params["size"];
        });
    }
}