import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { GeoreferenciaService, Georeferencia } from '../georeferencia.service';
import { RetoPreguntaService, RetoPregunta } from '../../reto-pregunta/reto-pregunta.service';

@Component({
  selector: 'app-georeferencia-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './georeferencia-form.component.html',
  styleUrls: ['./georeferencia-form.component.css'],
})
export class GeoreferenciaFormComponent implements OnInit {
  georeferencia: Georeferencia = {
    id: 0,
    id_reto_pregunta: 0,
    latitud: 0,
    longitud: 0,
    reto_pregunta: ''
  };

  retosPregunta: RetoPregunta[] = []; // Listado de preguntas de reto
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private georeferenciaService: GeoreferenciaService,
    private retoPreguntaService: RetoPreguntaService // Inyecta el servicio de preguntas de reto
  ) {}

  ngOnInit(): void {
    // Cargar las preguntas de reto disponibles
    this.retoPreguntaService.getRetoPreguntas().subscribe((data) => {
      this.retosPregunta = data;
    });

    // Cargar datos si es edición
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.georeferenciaService.getGeoreferencia(+id).subscribe((data) => {
        this.georeferencia = data;
      });
    }
  }

  saveGeoreferencia(): void {
    if (this.isEdit) {
      this.georeferenciaService.updateGeoreferencia(this.georeferencia.id, this.georeferencia).subscribe(() => {
        this.router.navigate(['/georeferencia']);
      });
    } else {
      this.georeferenciaService.createGeoreferencia(this.georeferencia).subscribe(() => {
        this.router.navigate(['/georeferencia']);
      });
    }
  }
}