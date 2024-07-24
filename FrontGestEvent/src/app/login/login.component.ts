import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.authenticate(this.email, this.password).subscribe(
      data => {
        console.log('Login success', data);
        this.router.navigate(['/toto']); // Redirige vers la page d'accueil en cas de succès
      },
      error => {
        console.error('Login failed', error);
        // Afficher un message d'erreur ou autre action en cas d'échec
      }
    );
  }
}
