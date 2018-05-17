import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router"

@Component({
    moduleId: module.id,
    selector: "everything-pizza",
    templateUrl: "./everything.template.html"
})
export class EverythingComponent{
    private size: String = "large";

    constructor(private route: ActivatedRoute){
        route.params.subscribe((params) => {
            this.size = params["size"];
        });
    }
}