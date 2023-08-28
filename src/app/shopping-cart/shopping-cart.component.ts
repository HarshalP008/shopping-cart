import { Component, OnInit} from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  public cartProduct:any[]= [];
  
  constructor( private formServ: FormService){}
  ngOnInit():void{
    this.formServ.getCartData().subscribe(data => {
      this.cartProduct = data;
    });
  }
  openForm(){
     this.formServ.showForm();
  }
  editProduct(i:number){
    this.formServ.setSelectedItemIndex(i);
    this.formServ.showForm();
  }
  removeProduct(i:number){
    this.formServ.removeItem(i);
  }
}
