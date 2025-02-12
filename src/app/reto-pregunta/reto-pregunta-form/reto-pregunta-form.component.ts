import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { RetoPreguntaService, RetoPregunta } from '../reto-pregunta.service';
import { RetoService, Reto } from '../../reto/reto.service';
import { DimensionService, Dimension } from '../../dimension/dimension.service';

@Component({
  selector: 'app-reto-pregunta-form',
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
  templateUrl: './reto-pregunta-form.component.html',
  styleUrls: ['./reto-pregunta-form.component.css'],
})
export class RetoPreguntaFormComponent implements OnInit {
  retoPregunta: RetoPregunta = {
    id: 0,
    id_reto: 0,
    titulo: '',
    pregunta: '',
    url_imagen: '',
    id_dimension: null,
    dimension: ''
  };

  retos: Reto[] = []; // Listado de retos
  dimensiones: Dimension[] = []; // Listado de dimensiones
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private retoPreguntaService: RetoPreguntaService,
    private retoService: RetoService, // Inyecta el servicio de retos
    private dimensionService: DimensionService // Inyecta el servicio de dimensiones
  ) {}

  ngOnInit(): void {
    // Cargar los retos disponibles
    this.retoService.getRetos().subscribe((data) => {
      this.retos = data;
    });

    // Cargar las dimensiones disponibles
    this.dimensionService.getDimensiones().subscribe((data) => {
      this.dimensiones = data;
    });

    // Cargar datos si es edición
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.retoPreguntaService.getRetoPregunta(+id).subscribe((data) => {
        this.retoPregunta = data;
      });
    }
  }

  saveRetoPregunta(): void {
    if (this.isEdit) {
      this.retoPreguntaService.updateRetoPregunta(this.retoPregunta.id, this.retoPregunta).subscribe(() => {
        this.router.navigate(['/reto-pregunta']);
      });
    } else {
      this.retoPreguntaService.createRetoPregunta(this.retoPregunta).subscribe(() => {
        this.router.navigate(['/reto-pregunta']);
      });
    }
  }
}