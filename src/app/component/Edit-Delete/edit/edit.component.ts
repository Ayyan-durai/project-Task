import {Component, Inject, OnInit} from '@angular/core';
import {ServiceService} from "../../service.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
interface arrayObject{
  productName:string,model:string,ram:number, storage:number,rate:number
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements  OnInit{


  form!: FormGroup;
constructor(public dialogRef: MatDialogRef<EditComponent>,
            @Inject(MAT_DIALOG_DATA) public data:any,private fb: FormBuilder) {
}
ngOnInit() {
  this.form = this.fb.group({
    Name: [this.data.name[this.data.index].productName, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]],
    model: [this.data.name[this.data.index].model, [Validators.required, Validators.minLength(1),Validators.pattern('[a-zA-Z0-9]*')]],
    ram: [this.data.name[this.data.index].ram, [Validators.required, Validators.minLength(1),Validators.maxLength(2), Validators.pattern('[0-9]*')]],
    storage: [this.data.name[this.data.index].storage, [Validators.required, Validators.minLength(2),Validators.maxLength(3), Validators.pattern('[0-9]*')]],
    rate: [this.data.name[this.data.index].rate, [Validators.required, Validators.minLength(2),Validators.maxLength(6), Validators.pattern('[0-9]*')]],
  });
}
  productDetail!:arrayObject[];
  update(){
    let objectArray= JSON.parse(localStorage.getItem('productDetail') || '[]');
    this.productDetail=this.productDetail || [];
    objectArray[this.data.index]=({productName: this.form.get('Name')?.value,model: this.form.get('model')?.value,
      ram: this.form.get('ram')?.value,storage: this.form.get('storage')?.value,rate: this.form.get('rate')?.value})

      // objectArray[this.data.index] =this.productDetail
      localStorage.setItem('productDetail', JSON.stringify(objectArray));
    console.log(objectArray)
    location.reload();

}
}
