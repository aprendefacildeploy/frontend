import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ContenidoService, Contenido } from '../contenido.service';
import { MatPaginator } from '@angular/material/paginator';
import { AlertService } from '../../services/alert.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-contenido-list',
  standalone: true,
  imports: [    
    RouterModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginator
  ],
  templateUrl: './contenido-list.component.html',
  styleUrls: ['./contenido-list.component.css'],
})
export class ContenidoListComponent implements OnInit {
  contenidos: Contenido[] = [];
  displayedColumns: string[] = ['id', 'tipo_contenido', 'tema', 'nombre', 'url', 'acciones'];
  dataSource = new MatTableDataSource<Contenido>();
  pageSize = 5;
  currentPage = 0;
  totalItems = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private contenidoService: ContenidoService, private alertService: AlertService) {}

  ngOnInit(): void {
    this.loadContenidos();
  }

  loadContenidos(): void {
    this.contenidoService.getContenidos().subscribe((data) => {
      this.contenidos = data; // Guarda todos los datos
      this.totalItems = data.length; // Calcula el total de elementos

      // Asigna todos los datos al DataSource
      this.dataSource.data = this.contenidos;

      // Asigna el paginador al DataSource
      this.dataSource.paginator = this.paginator;
    });
  }  

  deleteContenido(id: number): void {
    if (confirm('¿Estás seguro de eliminar este registro?')) {
      this.contenidoService.deleteContenido(id).pipe(
        catchError((error) => {
          // Mostrar alerta de error
          this.alertService.showErrorAlert('Ocurrió un error al eliminar el registro. Verifica que no se este utilizando en otro modulo');
          // Retornar un observable vacío o con un valor por defecto
          return of(null); // `of` es un observable que emite un valor y se completa
        })
      ).subscribe(() => {
        // Mostrar alerta de éxito
        this.alertService.showSuccessAlert('Realizado Exitosamente');
        // Recargar la lista de contenidos
        this.loadContenidos();
      });
    }
  }
}