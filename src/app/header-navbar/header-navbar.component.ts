import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {
  @Output() searchtext = new EventEmitter<String>();
  searchText = "";
  category = "";
  searchInput(event){
    this.searchText=event;
    this.searchtext.emit(event);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
