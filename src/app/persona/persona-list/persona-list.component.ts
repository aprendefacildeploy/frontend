import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PersonaService, Persona } from '../persona.service';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-persona-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule,MatIconModule,MatPaginator],
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css'],
})
export class PersonaListComponent implements OnInit {
  personas: Persona[] = [];
  displayedColumns: string[] = ['id', 'identificacion', 'nombre_completo', 'email', 'vigente', 'acciones'];
  dataSource = new MatTableDataSource<Persona>();
  pageSize = 5;
  currentPage = 0;
  totalItems = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.loadPersonas();
  }

  loadPersonas(): void {
    this.personaService.getPersonas().subscribe((data) => {
      this.personas = data;
      this.totalItems = data.length; // Calcula el total de elementos

      // Asigna todos los datos al DataSource
      this.dataSource.data = this.personas;

      // Asigna el paginador al DataSource
      this.dataSource.paginator = this.paginator;
    });
  }

  deletePersona(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta persona?')) {
      this.personaService.deletePersona(id).subscribe(() => {
        this.loadPersonas(); // Refrescar la lista
      });
    }
  }
}