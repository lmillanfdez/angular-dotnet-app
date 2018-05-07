import { NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { RouterModule } from "@angular/router";

import { AppComponent } from "./app/app.component";
import {TodoComponent, TodosListComponent, BookFormComponent/*, 
AboutComponent, PepperoniComponent, EverythingComponent*/ } from './app/components/facade';

//import { routes } from "./app/routing/routing.config"

@NgModule({
    declarations: [AppComponent, TodoComponent, TodosListComponent, 
                    BookFormComponent/*, AboutComponent, PepperoniComponent, EverythingComponent*/],
    imports: [BrowserModule, ReactiveFormsModule/*, RouterModule.forRoot(routes)*/],
    exports: [],
    bootstrap: [AppComponent]
})
class AppModule {
    
}

platformBrowserDynamic().bootstrapModule(AppModule);