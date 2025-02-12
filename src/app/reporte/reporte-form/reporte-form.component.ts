import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReporteService, Reporte } from '../reporte.service';

@Component({
  selector: 'app-reporte-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    RouterModule,
  ],
  templateUrl: './reporte-form.component.html',
  styleUrls: ['./reporte-form.component.css'],
})
export class ReporteFormComponent implements OnInit {
  reporte: Reporte = {
    id: '',
    nombre: '',
    descripcion: '',
    sql: ''
  };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reporteService: ReporteService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.reporteService.getReporte(id).subscribe((data) => {
        this.reporte = data;
      });
    }
  }

  /**
   * Método para guardar o actualizar un reporte.
   */
  saveReporte(): void {
    if (this.isEdit) {
      this.reporteService.updateReporte(this.reporte.id!, this.reporte).subscribe(() => {
        this.router.navigate(['/reporte']);
      });
    } else {
      this.reporteService.createReporte(this.reporte).subscribe(() => {
        this.router.navigate(['/reporte']);
      });
    }
  }
}