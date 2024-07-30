import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrestateurService } from '../Service/prestateur.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-prestateur-list',
  standalone: true,
  imports: [RouterLink,NgFor,SidebarComponent],
  templateUrl: './prestateur-list.component.html',
  styleUrls: ['./prestateur-list.component.css'] 
})
export class PrestateurListComponent implements OnInit {
  prestateurs: any[] = [];

  constructor(
    private prestateurService: PrestateurService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.prestateurService.getAllPrestateurs().subscribe(data => {
      this.prestateurs = data;
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
