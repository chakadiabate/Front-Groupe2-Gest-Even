import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PrestateurService } from '../Service/prestateur.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-prestateur',
  templateUrl: './prestateur.component.html',
  styleUrls: ['./prestateur.component.css'],
  imports: [CommonModule, FormsModule, RouterLink] // Importation nécessaire pour ngModel
})
export class PrestateurComponent implements OnInit {
  prestateur: any = { nom: '', email: '', profile: '', telephone: '' };
  isEditMode: boolean = false;

  constructor(
    private prestateurService: PrestateurService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.prestateurService.getPrestateurById(Number(id)).subscribe(data => {
        this.prestateur = data;
      });
    }
  }

  savePrestateur(): void {
    if (this.isEditMode) {
      this.prestateurService.updateprestateur(this.prestateur.id, this.prestateur).subscribe(() => {
        this.router.navigate(['/prestateurs']);
      });
    } else {
      this.prestateurService.createPrestateur(this.prestateur).subscribe(() => {
        this.router.navigate(['/prestateurs']);
      });
    }
  }
}
