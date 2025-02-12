import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MenuPersonaService, MenuPersona } from '../menu-persona.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu-persona-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule,MatIconModule],
  templateUrl: './menu-persona-list.component.html',
  styleUrls: ['./menu-persona-list.component.css'],
})
export class MenuPersonaListComponent implements OnInit {
  menuPersonas: MenuPersona[] = [];
  displayedColumns: string[] = ['menu', 'persona', 'estado', 'acciones'];

  constructor(private menuPersonaService: MenuPersonaService) {}

  ngOnInit(): void {
    this.loadMenuPersonas();
  }

  loadMenuPersonas(): void {
    this.menuPersonaService.getMenuPersonas().subscribe((data) => {
      this.menuPersonas = data;
    });
  }

  deleteMenuPersona(id_menu: string, id_persona: number): void {
    if (confirm('¿Estás seguro de eliminar esta asignación?')) {
      this.menuPersonaService.deleteMenuPersona(id_menu, id_persona).subscribe(() => {
        this.loadMenuPersonas(); // Refrescar la lista
      });
    }
  }
}