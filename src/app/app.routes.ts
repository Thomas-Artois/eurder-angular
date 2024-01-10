import { Routes } from '@angular/router';
import {ItemGalleryComponent} from "./features/item-gallery/item-gallery.component";
import {HomeComponent} from "./features/pages/home/home.component";
import {LoginComponent} from "./features/login/login.component";
import {ItemCreateComponent} from "./features/item-create/item-create.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'items', component: ItemGalleryComponent},
  {path: 'item-create', component: ItemCreateComponent}
];
