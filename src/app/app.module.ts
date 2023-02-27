import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AddComponent } from './component/add/add.component';
import { MaterialModule } from './material/material.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {RoutRoutingModule} from "./app-routing.module";
import { BodyComponent } from './component/body/body.component';
import { EditComponent } from './component/Edit-Delete/edit/edit.component';
import { DeleteComponent } from './component/Edit-Delete/delete/delete.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddComponent,
    BodyComponent,
    EditComponent,
    DeleteComponent,
  ],
    imports: [
        BrowserModule,
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        RoutRoutingModule,
        FormsModule,
        Ng2SearchPipeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
