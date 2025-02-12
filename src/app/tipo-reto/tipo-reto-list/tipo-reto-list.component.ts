import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TipoRetoService, TipoReto } from '../tipo-reto.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tipo-reto-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule,MatIconModule],
  templateUrl: './tipo-reto-list.component.html',
  styleUrls: ['./tipo-reto-list.component.css'],
})
export class TipoRetoListComponent implements OnInit {
  tiposReto: TipoReto[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'subtitulo', 'acciones'];

  constructor(private tipoRetoService: TipoRetoService) {}

  ngOnInit(): void {
    this.loadTiposReto();
  }

  loadTiposReto(): void {
    this.tipoRetoService.getTiposReto().subscribe((data) => {
      this.tiposReto = data;
    });
  }

  deleteTipoReto(id: number): void {
    if (confirm('¿Estás seguro de eliminar este tipo de reto?')) {
      this.tipoRetoService.deleteTipoReto(id).subscribe(() => {
        this.loadTiposReto(); // Refrescar la lista
      });
    }
  }
}