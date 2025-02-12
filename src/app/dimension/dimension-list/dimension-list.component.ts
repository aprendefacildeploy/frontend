import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DimensionService, Dimension } from '../dimension.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dimension-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule, MatIconModule],
  templateUrl: './dimension-list.component.html',
  styleUrls: ['./dimension-list.component.css'],
})
export class DimensionListComponent implements OnInit {
  dimensiones: Dimension[] = [];
  displayedColumns: string[] = ['id', 'descripcion', 'nombre' ,'acciones'];

  constructor(private dimensionService: DimensionService) {}

  ngOnInit(): void {
    this.loadDimensiones();
  }

  loadDimensiones(): void {
    this.dimensionService.getDimensiones().subscribe((data) => {
      this.dimensiones = data;
    });
  }

  deleteDimension(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta dimensión?')) {
      this.dimensionService.deleteDimension(id).subscribe(() => {
        this.loadDimensiones(); // Refrescar la lista
      });
    }
  }
}