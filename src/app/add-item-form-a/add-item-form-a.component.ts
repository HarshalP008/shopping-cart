import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-item-form-a',
  templateUrl: './add-item-form-a.component.html',
  styleUrls: ['./add-item-form-a.component.css']
})
export class AddItemFormAComponent implements OnInit{
  public myForm : FormGroup | any;
  public productList:any=[];
  public selectedItemIndex: number = -1;
  
  constructor(private fb: FormBuilder, private formServ: FormService) {}
  ngOnInit(): void {
    this.myForm = this.fb.group({
      productName: new FormControl('',Validators.required),
      productPrice: new FormControl('',Validators.required),
    })
    this.productList= this.getLocalData();
    this.selectedItemIndex = this.formServ.getSelectedItemIndex();
    if (this.selectedItemIndex !== -1) {
      let selectedItem = this.formServ.getItem(this.selectedItemIndex);
      this.myForm.setValue({
        productName: selectedItem.productName,
        productPrice: selectedItem.productPrice,
      });
    }    
  }
  onSubmit(){
    let newItem = {prodId: this.productList.length,...this.myForm.value}
    if (this.selectedItemIndex === -1){
      this.formServ.addItem(newItem);
    } else {
      this.formServ.updateItem(this.selectedItemIndex, this.myForm.value);
      this.formServ.setSelectedItemIndex(-1);
      this.selectedItemIndex= -1;
    }
    this.myForm.reset();
    this.formServ.hideForm();
    
  }
  getLocalData(){
    let localData= localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : [];
  }
  closeForm() {
    this.formServ.setSelectedItemIndex(-1);
    this.myForm.reset();
    this.formServ.hideForm();
  }
}