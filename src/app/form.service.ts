import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  public displayForm: boolean = false;
  public prodArr:any[]=[];
  private selectedItemIndex: number = -1;
  displayFormChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  public cartData = new BehaviorSubject<any[]>(this.getLocalData());

  constructor(){}
  showForm() {
    this.displayForm = true;
    this.displayFormChange.emit(true);
  }
  hideForm(){
    this.displayForm = false;
    this.displayFormChange.emit(false);
  }
  getCartData() {
    return this.cartData.asObservable();
  }
  addItem(item: any) {
    this.prodArr.push(item);
    this.cartData.next(this.prodArr);
    this.updateLocalStorage(this.prodArr);
  }
  updateLocalStorage(data: any) {
    localStorage.setItem('cartItems', JSON.stringify(data));
  }
  getLocalData(): any[] {
    const storedData = localStorage.getItem('cartItems');
    this.prodArr= storedData ? JSON.parse(storedData) : [];
    return storedData ? JSON.parse(storedData) : [];
  }
  setSelectedItemIndex(i: number) {
    this.selectedItemIndex = i;
  }
  getSelectedItemIndex() {
    return this.selectedItemIndex;
  }
  getItem(i: number) {
    return this.prodArr[i];
  }
  updateItem(i: number, updatedItem: any) {
    this.prodArr[i] = updatedItem;
    this.updateLocalStorage(this.prodArr);
    this.cartData.next(this.prodArr);
  }
   removeItem(i: number) {
    this.prodArr.splice(i, 1);
    this.updateLocalStorage(this.prodArr);
    this.cartData.next(this.prodArr);
  }
}
