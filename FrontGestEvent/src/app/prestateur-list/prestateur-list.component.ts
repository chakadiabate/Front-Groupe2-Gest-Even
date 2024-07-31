import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrestateurService } from '../Service/prestateur.service';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-prestateur-list',
  standalone: true,
  imports: [RouterLink,NgFor,SidebarComponent, NgIf],
  templateUrl: './prestateur-list.component.html',
  styleUrls: ['./prestateur-list.component.css'] 
})
export class PrestateurListComponent implements OnInit {
  prestateurs: any[] = [];
  currentUser:any;
  currentUserId: number | null=null;

  constructor(
    private prestateurService: PrestateurService,
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.prestateurService.getAllPrestateurs().subscribe(data => {
      this.prestateurs = data;
    });
    this.authservice.getCurrentUser().subscribe({
      next: (data) => {
        this.currentUser = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur', err);
      }
    });
  
  }

  deletePrestateur(id: number): void {
    this.prestateurService.deleteprestateur(id).subscribe(() => {
      this.prestateurs = this.prestateurs.filter(prestateur => prestateur.id !== id);
    });
  }

  editPrestateur(id: number): void {
    this.router.navigate(['/edit-prestateur', id]);
  }
}
