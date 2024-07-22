import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CorpsComponent } from './corps/corps.component';
import{EvenementComponent} from './evenement/evenement.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservationComponent } from './reservation/reservation.component';


export const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'evenement', component: NavbarComponent },
    { path: 'toto', component: SidebarComponent },
    { path: 'reservation', component: ReservationComponent }
    
    
];
