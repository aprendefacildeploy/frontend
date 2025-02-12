import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TipoContenidoService, TipoContenido } from '../tipo-contenido.service';

@Component({
  selector: 'app-tipo-contenido-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule,MatIconModule],
  templateUrl: './tipo-contenido-list.component.html',
  styleUrls: ['./tipo-contenido-list.component.css'],
})
export class TipoContenidoListComponent implements OnInit {
  tiposContenido: TipoContenido[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'acciones'];

  constructor(private tipoContenidoService: TipoContenidoService) {}

  ngOnInit(): void {
    this.loadTiposContenido();
  }

  loadTiposContenido(): void {
    this.tipoContenidoService.getTiposContenido().subscribe((data) => {
      this.tiposContenido = data;
    });
  }

  deleteTipoContenido(id: number): void {
    if (confirm('¿Estás seguro de eliminar este registro?')) {
      this.tipoContenidoService.deleteTipoContenido(id).subscribe(() => {
        this.loadTiposContenido(); // Refrescar la lista
      });
    }
  }
}