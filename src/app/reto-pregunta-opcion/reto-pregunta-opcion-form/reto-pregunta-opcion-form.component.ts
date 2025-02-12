import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RetoPreguntaOpcionService, RetoPreguntaOpcion } from '../reto-pregunta-opcion.service';
import { RetoPreguntaService, RetoPregunta } from '../../reto-pregunta/reto-pregunta.service';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reto-pregunta-opcion-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './reto-pregunta-opcion-form.component.html',
  styleUrls: ['./reto-pregunta-opcion-form.component.css'],
})
export class RetoPreguntaOpcionFormComponent implements OnInit {
  opcion: RetoPreguntaOpcion = {
    id: 0,
    id_reto_pregunta: 0,
    descripcion: '',
    url_imagen: '',
    correcta: false,
  };

  retosPregunta: RetoPregunta[] = []; // Listado de preguntas de reto
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private opcionService: RetoPreguntaOpcionService,
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
      this.opcionService.getRetoPreguntaOpcion(+id).subscribe((data) => {
        this.opcion = data;
      });
    }
  }

  saveOpcion(): void {
    if (this.isEdit) {
      this.opcionService.updateRetoPreguntaOpcion(this.opcion.id, this.opcion).subscribe(() => {
        this.router.navigate(['/reto-pregunta-opcion']);
      });
    } else {
      this.opcionService.createRetoPreguntaOpcion(this.opcion).subscribe(() => {
        this.router.navigate(['/reto-pregunta-opcion']);
      });
    }
  }
}