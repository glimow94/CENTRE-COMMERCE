import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleItemDataService {
  myItem: Object;
  constructor() { }
  saveItem(itemData:any){
    this.myItem = itemData;
  }
  getItem(){
    return this.myItem;
  }
}
