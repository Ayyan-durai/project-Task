import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from "./component/add/add.component";
import {BodyComponent} from "./component/body/body.component";

const routes: Routes = [{ path: '', redirectTo: 'body-component', pathMatch: 'full'},
            {path:'add-component',component:AddComponent},
  {path:'body-component',component:BodyComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutRoutingModule { }
