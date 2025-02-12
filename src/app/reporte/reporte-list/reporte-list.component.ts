import { Component, OnInit } from '@angular/core';
import { ReporteService, Reporte } from '../reporte.service';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reporte-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule,MatIconModule],
  templateUrl: './reporte-list.component.html',
  styleUrls: ['./reporte-list.component.css'],
})
export class ReporteListComponent implements OnInit {
  reportes: Reporte[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'sql', 'acciones'];

  constructor(private reporteService: ReporteService, private router: Router) {}

  ngOnInit(): void {
    this.loadReportes();
  }

  /**
   * Método para cargar todos los reportes.
   */
  loadReportes(): void {
    this.reporteService.getReportes().subscribe({
      next: (data) => {
        this.reportes = data;
      },
      error: (err) => {
        console.error('Error al cargar los reportes:', err);
      },
    });
  }

  /**
   * Método para navegar a la vista de edición de un reporte.
   * @param id - El ID del reporte a editar.
   */
  editReporte(id: number): void {
    this.router.navigate(['/reporte/edit', id]);
  }

  generateReporte(id:string): void{
    this.reporteService.generateReporte(id).subscribe((blob: Blob) => {
      // Crear un enlace temporal para descargar el archivo
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `reporte_${id}.xlsx`; // Nombre del archivo
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url); // Liberar la URL temporal
      document.body.removeChild(a);
    })
  }

  /**
   * Método para eliminar un reporte.
   * @param id - El ID del reporte a eliminar.
   */
  deleteReporte(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este reporte?')) {
      this.reporteService.deleteReporte(id).subscribe({
        next: () => {
          this.loadReportes(); // Recarga la lista después de eliminar
        },
        error: (err) => {
          console.error('Error al eliminar el reporte:', err);
        },
      });
    }
  }
}