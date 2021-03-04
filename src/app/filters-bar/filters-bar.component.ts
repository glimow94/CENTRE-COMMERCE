import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.css']
})

export class FiltersBarComponent implements OnInit {
  @Output() selectedCategory = new EventEmitter<String>();
  @Output() selectedPrice = new EventEmitter<Number>();
  
  buttonTitle = "Categoria";
  categories = ['Elettrodomestici','Cellulari','TV e Monitor','Videogames','Computer','Accessori','Altro'];
  last_categ = 'Tutti';
  searchText = "";
  selected_price = null;

 /*  changeCategory(selected){
    this.buttonTitle = selected;
    this.selectedCategory.emit(selected);
  }

  priceInput(event){
    this.selected_price = event;
    this.selectedPrice.emit(event);
  } */
  
  constructor() {
    
  }

  ngOnInit(): void {
    
  }
  changeCategory(item){
    this.buttonTitle = item.toString()
  }
}
