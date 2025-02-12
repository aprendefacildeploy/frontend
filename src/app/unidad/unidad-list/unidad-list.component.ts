import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { UnidadService, Unidad } from '../unidad.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-unidad-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule,MatIconModule],
  templateUrl: './unidad-list.component.html',
  styleUrls: ['./unidad-list.component.css'],
})
export class UnidadListComponent implements OnInit {
  unidades: Unidad[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'orden', 'vigente', 'acciones'];

  constructor(private unidadService: UnidadService) {}

  ngOnInit(): void {
    this.loadUnidades();
  }

  loadUnidades(): void {
    this.unidadService.getUnidades().subscribe((data) => {
      this.unidades = data;
    });
  }

  deleteUnidad(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta unidad?')) {
      this.unidadService.deleteUnidad(id).subscribe(() => {
        this.loadUnidades(); // Refrescar la lista
      });
    }
  }
}