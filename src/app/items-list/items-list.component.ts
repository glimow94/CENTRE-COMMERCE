import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { filter, map } from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';
import { SingleItemDataService } from "../single-item-data.service"
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Input() price: number;
  //navigation params
  private sub: any;
  public category: string;
  public search_text: string;
  //firebase storage
  public ItemList: Array<any> = [];
  itemList: AngularFireList<any>;
  public DATA : Array<any>= [];

  
  constructor(private db:AngularFireDatabase,private route: ActivatedRoute, private singleItemService : SingleItemDataService) {
    this.itemList = this.db.list("/menuItems");
    this.itemList.snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe((data: any) => {
        this.DATA = data;
        this.searchFilter();
      }) 
  }

  ngOnInit(): void {
   
    //inizializzo searchText e Category
    this.sub = this.route.params.subscribe(params => {
      console.log(params.category);
      console.log(params.searchText);
          if(params.category){
            this.category = params.category; 
            this.filterData();
          }
          else {
            this.category = "";
          }
          if(params.searchText && params.searchText.trim().length != 0){
            this.search_text = params.searchText;
            this.category ="";
            this.searchFilter();
          } 
          else{
            this.search_text = "";
            this.filterData();
          } 
    });

    
  }


/*   updateCategory(value){
    this.category = value;
    this.filterData()
  } */
  /* updatePrice(value: number):void{
    this.price = value;
    this.priceFilter();
  }
  updateSearchText(value : string):void{
    this.search_text = value;
    this.searchFilter();
  } */
   //filtro i dati degli item in base alla categoria
   filterData(){
    if(this.category && this.category != 'Tutti'){
      this.itemList = this.db.list("/menuItems", ref => ref.orderByChild('category').equalTo(this.category));
    }else{
      this.itemList = this.db.list("/menuItems");
    }
    
    this.itemList.snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe((data: any) => {
        this.ItemList = data;
      })
  }
  //filtro in base al prezzo
  priceFilter(){

  }
  //filtro in base alla stringa della barra di ricerca posta nell'header nav-bar
  searchFilter(){
    var newData=[];
    console.log(this.DATA);
    if(this.search_text && this.search_text.trim().length != 0){
      for(var i = 0; i< this.DATA.length ; i++){
        if(this.DATA[i].title.toUpperCase().includes(this.search_text.toUpperCase())){
          newData.push(this.DATA[i]);
        }
      }
      this.ItemList = newData;
    }else{
      
    }
  }

  //funzione che passa i dati del singolo componente al componente 'single-item' utlizzando il servizio SINGLEITEMDATASERVICE
  sendItemData(data){
    console.log(data);
    this.singleItemService.saveItem(data);
  }

}
