import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../service.service";
import {Router} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
interface arrayObject{
productName:string,model:string,ram:number, storage:number,rate:number
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form!: FormGroup;
  productDetail:arrayObject[]=[];
  constructor(private fb: FormBuilder) {
  }

ngOnInit() {
  this.form = this.fb.group({
    productName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]],
    model: ['', [Validators.required, Validators.minLength(1),Validators.pattern('[a-zA-Z0-9]*')]],
    ram: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(2), Validators.pattern('[0-9]*')]],
    storage: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(3), Validators.pattern('[0-9]*')]],
    rate: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(6), Validators.pattern('[0-9]*')]],
  });
}

submit() {
    this.productDetail=JSON.parse(String(localStorage.getItem('productDetail')) );
  this.productDetail=this.productDetail || undefined || [];
  this.productDetail.push({productName: this.form.get('productName')?.value,model: this.form.get('model')?.value,
  ram: this.form.get('ram')?.value,storage: this.form.get('storage')?.value,rate: this.form.get('rate')?.value})
  localStorage.setItem('productDetail',JSON.stringify(this.productDetail))
  this.form.reset()
}

}

