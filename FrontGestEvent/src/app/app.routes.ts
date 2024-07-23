import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {LieuComponent} from "./lieu/lieu.component";


export const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'toto', component: NavbarComponent },
    { path: 'toto', component: SidebarComponent },
    { path: 'lieu', component: LieuComponent }
    // { path: 'A', component: n }


];
