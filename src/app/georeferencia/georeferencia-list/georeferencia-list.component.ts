import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { GeoreferenciaService, Georeferencia } from '../georeferencia.service';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-georeferencia-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule, MatIconModule,MatPaginator],
  templateUrl: './georeferencia-list.component.html',
  styleUrls: ['./georeferencia-list.component.css'],
})
export class GeoreferenciaListComponent implements OnInit {
  georeferencias: Georeferencia[] = [];
  displayedColumns: string[] = ['id', 'reto_pregunta', 'latitud', 'longitud', 'acciones'];
  dataSource = new MatTableDataSource<Georeferencia>();
  pageSize = 5;
  currentPage = 0;
  totalItems = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private georeferenciaService: GeoreferenciaService) {}

  ngOnInit(): void {
    this.loadGeoreferencias();
  }

  loadGeoreferencias(): void {
    this.georeferenciaService.getGeoreferencias().subscribe((data) => {
      this.georeferencias = data;      
      this.totalItems = data.length; // Calcula el total de elementos

      // Asigna todos los datos al DataSource
      this.dataSource.data = this.georeferencias;

      // Asigna el paginador al DataSource
      this.dataSource.paginator = this.paginator;

    });
  }

  deleteGeoreferencia(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta georeferencia?')) {
      this.georeferenciaService.deleteGeoreferencia(id).subscribe(() => {
        this.loadGeoreferencias(); // Refrescar la lista
      });
    }
  }
}