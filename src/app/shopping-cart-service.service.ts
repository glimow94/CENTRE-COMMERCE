import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {
  private itemList = [];
  private totPrice = new BehaviorSubject<number>(0);
  private totItems = new BehaviorSubject<number>(0);
  private totAsObservable = this.totPrice.asObservable();
  constructor() { }

  saveCartItem(itemData){
    this.itemList.push(itemData);
    var totalPrice = 0;
    for(let i = 0; i < this.itemList.length; i++){
      totalPrice += this.itemList[i].price;
    }
    this.totPrice.next(totalPrice);
  }
  getCartList(){
    return this.itemList;
  }
  getTotalPrice(){
    return this.totAsObservable;
  }
  clearCart(){
    this.itemList = []
    return this.itemList
  }
  deleteElementCart(elem_id){
    for(let i = 0; i<this.itemList.length; i++){
      if(this.itemList[i].title == elem_id){
        this.itemList.splice(i, 1);
      }
    }
  }
}
