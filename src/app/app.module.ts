import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FiltersBarComponent } from './filters-bar/filters-bar.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'; 
import {MatBadgeModule} from '@angular/material/badge'; 
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleItemDataService } from './single-item-data.service';
import { ShoppingCartServiceService } from './shopping-cart-service.service'
import { SingleItemComponent } from './single-item/single-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FiltersBarComponent,
    ItemsListComponent,
    ShoppingCartComponent,
    SingleItemComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),//necessari per firebase
    AngularFirestoreModule, 
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule,
    MatButtonModule
  ],
  providers: [
    SingleItemDataService,
    ShoppingCartServiceService
  ],
  bootstrap: [AppComponent],
  
})

export class AppModule {
  
 }
