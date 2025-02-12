import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PersonaUnidadService, PersonaUnidad } from '../persona-unidad.service';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-persona-unidad-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule,MatIconModule,MatPaginator],
  templateUrl: './persona-unidad-list.component.html',
  styleUrls: ['./persona-unidad-list.component.css'],
})
export class PersonaUnidadListComponent implements OnInit {
  asignaciones: PersonaUnidad[] = [];
  displayedColumns: string[] = ['id', 'id_persona', 'id_unidad', 'id_tipo_estado', 'fecha_inicio', 'acciones'];
  dataSource = new MatTableDataSource<PersonaUnidad>();
  pageSize = 5;
  currentPage = 0;
  totalItems = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private personaUnidadService: PersonaUnidadService) {}

  ngOnInit(): void {
    this.loadAsignaciones();
  }

  loadAsignaciones(): void {
    this.personaUnidadService.getAsignaciones().subscribe((data) => {
      this.asignaciones = data;      
      this.totalItems = data.length; // Calcula el total de elementos

      // Asigna todos los datos al DataSource
      this.dataSource.data = this.asignaciones;

      // Asigna el paginador al DataSource
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteAsignacion(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta asignación?')) {
      this.personaUnidadService.deleteAsignacion(id).subscribe(() => {
        this.loadAsignaciones(); // Refrescar la lista
      });
    }
  }
}