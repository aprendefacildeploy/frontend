import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RetoPreguntaOpcionService, RetoPreguntaOpcion } from '../reto-pregunta-opcion.service';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-reto-pregunta-opcion-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule, MatIconModule,MatPaginator],
  templateUrl: './reto-pregunta-opcion-list.component.html',
  styleUrls: ['./reto-pregunta-opcion-list.component.css'],
})
export class RetoPreguntaOpcionListComponent implements OnInit {
  opciones: RetoPreguntaOpcion[] = [];
  displayedColumns: string[] = ['id', 'id_reto_pregunta', 'descripcion', 'url_imagen', 'correcta', 'acciones'];
  dataSource = new MatTableDataSource<RetoPreguntaOpcion>();
  pageSize = 5;
  currentPage = 0;
  totalItems = 0;
    
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private opcionService: RetoPreguntaOpcionService) {}

  ngOnInit(): void {
    this.loadOpciones();
  }

  loadOpciones(): void {
    this.opcionService.getRetoPreguntaOpciones().subscribe((data) => {
      this.opciones = data;
      this.totalItems = data.length; // Calcula el total de elementos

      // Asigna todos los datos al DataSource
      this.dataSource.data = this.opciones;

      // Asigna el paginador al DataSource
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteOpcion(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta opción?')) {
      this.opcionService.deleteRetoPreguntaOpcion(id).subscribe(() => {
        this.loadOpciones(); // Refrescar la lista
      });
    }
  }
}