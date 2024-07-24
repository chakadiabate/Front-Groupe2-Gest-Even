import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CorpsComponent } from './corps/corps.component';
import{EvenementComponent} from './evenement/evenement.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'accueil', component: DashboardComponent },
    { path: '', component: UtilisateurComponent },
    { path: 'login', component: LoginComponent },
    { path: 'toto', component: NavbarComponent },
    { path: 'toto', component: SidebarComponent }
    
   
    // { path: 'A', component: n }
    
    
];
