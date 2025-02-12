import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RetoService, Reto } from '../reto.service';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-reto-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule, MatIconModule,MatPaginator],
  templateUrl: './reto-list.component.html',
  styleUrls: ['./reto-list.component.css'],
})
export class RetoListComponent implements OnInit {
  retos: Reto[] = [];
  displayedColumns: string[] = ['id', 'unidad', 'tipo_reto', 'url', 'vigente', 'acciones'];
  dataSource = new MatTableDataSource<Reto>();
  pageSize = 5;
  currentPage = 0;
  totalItems = 0;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private retoService: RetoService) {}

  ngOnInit(): void {
    this.loadRetos();
  }

  loadRetos(): void {
    this.retoService.getRetos().subscribe((data) => {
      this.retos = data;      
      this.totalItems = data.length; // Calcula el total de elementos

      // Asigna todos los datos al DataSource
      this.dataSource.data = this.retos;

      // Asigna el paginador al DataSource
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteReto(id: number): void {
    if (confirm('¿Estás seguro de eliminar este reto?')) {
      this.retoService.deleteReto(id).subscribe(() => {
        this.loadRetos(); // Refrescar la lista
      });
    }
  }
}