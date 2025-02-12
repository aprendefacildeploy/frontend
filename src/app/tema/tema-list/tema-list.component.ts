import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TemaService, Tema } from '../tema.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tema-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule,MatIconModule,MatPaginator],
  templateUrl: './tema-list.component.html',
  styleUrls: ['./tema-list.component.css'],
})
export class TemaListComponent implements OnInit {
  temas: Tema[] = [];
  displayedColumns: string[] = ['id', 'unidad', 'titulo', 'orden', 'vigente', 'acciones'];
  dataSource = new MatTableDataSource<Tema>();
  pageSize = 5;
  currentPage = 0;
  totalItems = 0;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private temaService: TemaService) {}

  ngOnInit(): void {
    this.loadTemas();
  }

  loadTemas(): void {
    this.temaService.getTemas().subscribe((data) => {
      this.temas = data;
      this.totalItems = data.length; // Calcula el total de elementos

      // Asigna todos los datos al DataSource
      this.dataSource.data = this.temas;

      // Asigna el paginador al DataSource
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteTema(id: number): void {
    if (confirm('¿Estás seguro de eliminar este registro?')) {
      this.temaService.deleteTema(id).subscribe(() => {
        this.loadTemas(); // Refrescar la lista
      });
    }
  }
}