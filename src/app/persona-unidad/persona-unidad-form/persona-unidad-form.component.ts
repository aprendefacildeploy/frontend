import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { PersonaUnidadService, PersonaUnidad } from '../persona-unidad.service';
import { PersonaService, Persona } from '../../persona/persona.service';
import { UnidadService, Unidad } from '../../unidad/unidad.service';
import { TipoEstadoService, TipoEstado } from '../../tipo-estado/tipo-estado.service';

@Component({
  selector: 'app-persona-unidad-form',
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
  templateUrl: './persona-unidad-form.component.html',
  styleUrls: ['./persona-unidad-form.component.css'],
})
export class PersonaUnidadFormComponent implements OnInit {
  asignacion: PersonaUnidad = {
    id: 0,
    id_persona: 0,
    id_unidad: 0,
    id_tipo_estado: 0,
    fecha_inicio: null,
    persona: '',
    tipo_estado: '',
    unidad: ''
  };

  personas: Persona[] = []; // Listado de personas
  unidades: Unidad[] = []; // Listado de unidades
  tiposEstado: TipoEstado[] = []; // Listado de tipos de estado
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personaUnidadService: PersonaUnidadService,
    private personaService: PersonaService, // Inyecta el servicio de personas
    private unidadService: UnidadService, // Inyecta el servicio de unidades
    private tipoEstadoService: TipoEstadoService // Inyecta el servicio de tipos de estado
  ) {}

  ngOnInit(): void {
    // Cargar las personas disponibles
    this.personaService.getPersonas().subscribe((data) => {
      this.personas = data;
    });

    // Cargar las unidades disponibles
    this.unidadService.getUnidades().subscribe((data) => {
      this.unidades = data;
    });

    // Cargar los tipos de estado disponibles
    this.tipoEstadoService.getTiposEstado().subscribe((data) => {
      this.tiposEstado = data;
    });

    // Cargar datos si es edición
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.personaUnidadService.getAsignacion(+id).subscribe((data) => {
        this.asignacion = data;
      });
    }
  }

  saveAsignacion(): void {
    if (this.isEdit) {
      this.personaUnidadService.updateAsignacion(this.asignacion.id, this.asignacion).subscribe(() => {
        this.router.navigate(['/persona-unidad']);
      });
    } else {
      this.personaUnidadService.createAsignacion(this.asignacion).subscribe(() => {
        this.router.navigate(['/persona-unidad']);
      });
    }
  }
}