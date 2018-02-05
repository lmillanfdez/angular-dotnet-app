import { NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    exports: [],
    bootstrap: [AppComponent]
})
class AppModule {
    
}

platformBrowserDynamic().bootstrapModule(AppModule);