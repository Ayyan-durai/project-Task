import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit{
title='Header';
  addButton=true;

ngOnInit() {
}
  addClick(){
  this.addButton=false;
  }
  turnOn(){
  if(!this.addButton){
    this.addButton=true
  }
  }
}
