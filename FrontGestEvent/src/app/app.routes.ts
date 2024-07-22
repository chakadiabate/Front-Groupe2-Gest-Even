import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CorpsComponent } from './corps/corps.component';
import{EvenementComponent} from './evenement/evenement.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


export const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'toto', component: NavbarComponent },
    { path: 'toto', component: SidebarComponent }
    // { path: 'A', component: n }
    
    
];
