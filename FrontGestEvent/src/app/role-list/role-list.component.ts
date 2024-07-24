import { Component } from '@angular/core';
import { Role } from '../models/utilisateur.model';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-role-list',
  standalone: true,
  imports: [],
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css'
})
export class RoleListComponent {
  roles: Role[] = [];

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.roleService.getAllRoles().subscribe(
      (data: Role[]) => this.roles = data,
      error => console.error('Erreur lors de la récupération des rôles', error)
    );
  }
}
