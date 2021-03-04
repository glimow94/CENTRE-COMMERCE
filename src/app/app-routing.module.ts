import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleItemComponent } from './single-item/single-item.component';
import { AppComponent } from './app.component'
import { ItemsListComponent } from './items-list/items-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: ItemsListComponent},
  {path: 'items-list/:category/:searchText', component: ItemsListComponent},
  {path: 'single-item', component: SingleItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
