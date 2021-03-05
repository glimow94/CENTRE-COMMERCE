import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {
  private itemList = [];
  private totPrice = new BehaviorSubject<number>(0);
  private totAsObservable = this.totPrice.asObservable();
  constructor() { }
  /* aggiungi oggetto nella lista del carrello */
  saveCartItem(itemData){
    itemData.quantity = 1;
    this.itemList.push(itemData);
    var totalPrice = 0;
    /* aggiorno il prezzo totale del carrello */
    for(let i = 0; i < this.itemList.length; i++){
      totalPrice += this.itemList[i].price;
    }
    this.totPrice.next(totalPrice);
  }
  /* get lista oggetti nel carrello */
  getCartList(){
    return this.itemList;
  }
  /* get prezzo totale */
  getTotalPrice(){
    return this.totAsObservable;
  }
  clearCart(){
    this.itemList = []
    return this.itemList
  }
  deleteElementCart(elem_id){
    /* elimino elemento dalla lista del carrello */
    for(let i = 0; i<this.itemList.length; i++){
      if(this.itemList[i].title == elem_id){
        this.itemList.splice(i, 1);
      }
    }
    /* modifico il prezzo */
    var totalPrice = 0;
    for(let i = 0; i < this.itemList.length; i++){
      totalPrice += this.itemList[i].price * this.itemList[i].quantity;
    }
    this.totPrice.next(totalPrice);
  }
  getStars(item){
    var rate = []
    for(var i = 0; i < Math.round(item.rating); i++){
      rate.push(0)
    }
    return rate;
  }
  isInCart(item){ /* controllo se nel carrello c'è un determinato elemento */
    var isIn = false;
    for(let i = 0; i<this.itemList.length; i++){
      if(this.itemList[i].title == item.title){
        isIn = true;
      }
    }
    return isIn;
  }
  lessQuantity(item_id){
    /* elimino elemento dalla lista del carrello */
    for(let i = 0; i<this.itemList.length; i++){
      if(this.itemList[i].title == item_id){
        if(this.itemList[i].quantity > 1) this.itemList[i].quantity -= 1;
      }
    }
    /* aggiorno il prezzo */
    var totalPrice = 0;
    for(let i = 0; i < this.itemList.length; i++){
      totalPrice += this.itemList[i].price * this.itemList[i].quantity;
    }
    this.totPrice.next(totalPrice);
  }
  moreQuantity(item_id){
    /* elimino elemento dalla lista del carrello */
    for(let i = 0; i<this.itemList.length; i++){
      if(this.itemList[i].title == item_id){
        this.itemList[i].quantity += 1;
      }
    }
    /* aggiorno il prezzo */
    var totalPrice = 0;
    for(let i = 0; i < this.itemList.length; i++){
      totalPrice += this.itemList[i].price * this.itemList[i].quantity;
    }
    this.totPrice.next(totalPrice);
  }
}
