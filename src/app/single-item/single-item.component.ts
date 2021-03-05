import { Component, OnInit } from '@angular/core';
import { SingleItemDataService } from "../single-item-data.service"
import { ShoppingCartServiceService } from '../shopping-cart-service.service'
@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {
  public rate = []; /* variabile per generare il numero di stelle in relazione al rating del singolo oggetto */
  public item;
  public isInCart = false; /* variabile che ci dice se l'oggetto è stato già inserito nel carrello o meno */
  constructor(itemDataService : SingleItemDataService , public shoppingCartService : ShoppingCartServiceService) {
    //prendo i dati del singolo item dal servizio singleItemService
    this.item = itemDataService.getItem();
    this.isInCart = shoppingCartService.isInCart(this.item)
  }
  addToCartClick(){
    this.shoppingCartService.saveCartItem(this.item);
    this.isInCart = true;
    window.alert('Prodotto aggiunto al carrello!');
  }
  ngOnInit(): void {
    for(var i = 0; i < Math.round(this.item.rating); i++){
      this.rate.push(0)
    }
  }

}
