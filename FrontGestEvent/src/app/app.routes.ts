import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CorpsComponent } from './corps/corps.component';
import{EvenementComponent} from './evenement/evenement.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PrestateurComponent } from './prestateur/prestateur.component';
import { LieuComponent } from './lieu/lieu.component';
import { EquipementComponent } from './equipement/equipement.component';
import { ReglageComponent } from './reglage/reglage.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'evenement', component: EvenementComponent },
    { path: 'acceuil', component:AcceuilComponent},
    { path: 'reservation', component: ReservationComponent },
    { path: 'prestateur', component: PrestateurComponent },
    { path: 'lieu', component: LieuComponent },
    { path: 'equipement', component: EquipementComponent },
    { path: 'reglage', component:ReglageComponent },
    { path: 'utilisateur', component: UtilisateurComponent }
    
    
];
