import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RetoPreguntaService, RetoPregunta } from '../reto-pregunta.service';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-reto-pregunta-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule, MatIconModule,MatPaginator],
  templateUrl: './reto-pregunta-list.component.html',
  styleUrls: ['./reto-pregunta-list.component.css'],
})
export class RetoPreguntaListComponent implements OnInit {
  retoPreguntas: RetoPregunta[] = [];
  displayedColumns: string[] = ['id', 'id_reto', 'titulo', 'pregunta', 'url_imagen', 'id_dimension', 'acciones'];
  dataSource = new MatTableDataSource<RetoPregunta>();
  pageSize = 5;
  currentPage = 0;
  totalItems = 0;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private retoPreguntaService: RetoPreguntaService) {}

  ngOnInit(): void {
    this.loadRetoPreguntas();
  }

  loadRetoPreguntas(): void {
    this.retoPreguntaService.getRetoPreguntas().subscribe((data) => {
      this.retoPreguntas = data;      
      this.totalItems = data.length; // Calcula el total de elementos

      // Asigna todos los datos al DataSource
      this.dataSource.data = this.retoPreguntas;

      // Asigna el paginador al DataSource
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteRetoPregunta(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta pregunta?')) {
      this.retoPreguntaService.deleteRetoPregunta(id).subscribe(() => {
        this.loadRetoPreguntas(); // Refrescar la lista
      });
    }
  }
}