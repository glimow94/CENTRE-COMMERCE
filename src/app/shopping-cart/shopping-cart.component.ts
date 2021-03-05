import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit , Input } from '@angular/core';
import { PartialObserver } from 'rxjs';
import { ItemsListComponent } from '../items-list/items-list.component';
import { ShoppingCartServiceService } from '../shopping-cart-service.service'
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public showcart = false;
  @Input() item : Object; //oppure any
  itemList = this.shoppingCartService.getCartList();  
  totPrice : Number;
  items_number : Number;

  constructor(public shoppingCartService: ShoppingCartServiceService) {
  }
  
  ngOnInit(): void {
    this.shoppingCartService/* prendo prezzo totale come observable dal servizio */
      .getTotalPrice()
        .subscribe((value) => this.totPrice = value);
  }

  showCart(){
    if(this.showcart == true){
      this.showcart = false;
    }else{
      this.showcart = true;
    }
  }

  clearCart(){
    this.shoppingCartService.clearCart();
  }

  deleteElem(elem_id){
    this.shoppingCartService.deleteElementCart(elem_id);
  }

  addQuantity(elem_id){
    this.shoppingCartService.moreQuantity(elem_id);
  }
  lessQuantity(elem_id){
    this.shoppingCartService.lessQuantity(elem_id);
  }
}
