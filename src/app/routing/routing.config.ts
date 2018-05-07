import { Routes } from "@angular/router";

import { PepperoniComponent, EverythingComponent } from "../components/facade";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/pepperoni",
        pathMatch: "full"
    },
    {
        path: "pepperoni",
        component: PepperoniComponent
    },
    {
        path: "everything/:size",
        component: EverythingComponent
    }
];