import {Component, Injector, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ServiceService} from "../service.service";
import {Router} from "@angular/router";
import {copyAssets} from "@angular-devkit/build-angular/src/utils/copy-assets";
import {MatDialog} from "@angular/material/dialog";
import {DeleteComponent} from "../Edit-Delete/delete/delete.component";
import {EditComponent} from "../Edit-Delete/edit/edit.component";
import { Pipe, PipeTransform } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
interface arrayObject{
  productName:string,model:string,ram:number, storage:number,rate:number
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit,OnChanges,PipeTransform{
  productDetail: string | null | any[]=[]
object:any[]=[];
  tempObject: any[]=[]
value!:string;
  constructor(router:Router,public dialog: MatDialog) {
   // this.productNameGet=this.service.subject$.subscribe(x=>x)

  }
  openDialogDelete(i:number,txt:string): void {
    if(txt==='delete'){
      const dialogRef = this.dialog.open(DeleteComponent, {

      data: {index:i, name: this.object},
    });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if(typeof result === "number"){
          this.object.splice(result,1)
          localStorage.setItem('productDetail',JSON.stringify(this.object))
          console.log('close:'+result)
        }

      });
    }
    if(txt==='edit'){
      const dialogRef = this.dialog.open(EditComponent, {
        data: {index:i, name: this.object},
      });
    }

  }


  // numUp(){
  //   let num=0;
  //   return ++num;
  // }
  ngOnInit() {

 this.productDetail= localStorage.getItem('productDetail')
this.object=JSON.parse(String(this.productDetail))
    console.log(this.object)
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  transform(value: any, ...args: any[]): any {
  }



  }


