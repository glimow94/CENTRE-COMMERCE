import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { filter, map } from "rxjs/operators";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private db:AngularFireDatabase){

  }

}
