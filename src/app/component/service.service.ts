import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {BodyComponent} from "./body/body.component";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // subject$=new BehaviorSubject<string>('')
   static index:number;
  constructor( private router:Router, public Service:ServiceService ) { }

  static setData(data:number){
    this.index = data;
  }
  static getData(){
    let temp = this.index;
    this.clearData();
    return temp;
  }
  static clearData(){
    this.index=0;
  }
}
