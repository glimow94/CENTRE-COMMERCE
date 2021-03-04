import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { filter, map } from "rxjs/operators";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Centre, il tuo e-commerce a portata di mano';
  //firebase storage
  public ItemList: Array<any> = [];
  itemList: AngularFireList<any>;
  public DATA : Array<any>= [];

  constructor(private db:AngularFireDatabase){
    //inizializzo filterList dallo storage di firebase
    this.itemList = this.db.list("/menuItems");
    this.itemList.snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe((data: any) => {
        this.ItemList = data;
        this.DATA = data;
      })
  }
}
