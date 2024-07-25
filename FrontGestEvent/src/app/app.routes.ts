import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EvenementComponent } from './evenement/evenement.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './Utilisateur/utilisateur.component';
import { TacheComponent } from './Tache/tache.component';

export const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'utilisateur', component: NavbarComponent },
  { path: 'tache', component: TacheComponent },
  { path: 'evenement', component: EvenementComponent },
  // { path: 'A', component: n }
];
