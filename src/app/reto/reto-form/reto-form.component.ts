import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { RetoService, Reto } from '../reto.service';
import { UnidadService, Unidad } from '../../unidad/unidad.service';
import { TipoRetoService, TipoReto } from '../../tipo-reto/tipo-reto.service';

@Component({
  selector: 'app-reto-form',
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
  templateUrl: './reto-form.component.html',
  styleUrls: ['./reto-form.component.css'],
})
export class RetoFormComponent implements OnInit {
  reto: Reto = {
    id: 0,
    id_unidad: 0,
    id_tipo_reto: 0,
    url: '',
    vigente: 'S',
    unidad: '', // Nombre de la unidad (opcional)
    tipo_reto: '', // Nombre del tipo de reto (opcional)
  };

  unidades: Unidad[] = []; // Listado de unidades
  tiposReto: TipoReto[] = []; // Listado de tipos de reto
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private retoService: RetoService,
    private unidadService: UnidadService, // Inyecta el servicio de unidades
    private tipoRetoService: TipoRetoService // Inyecta el servicio de tipos de reto
  ) {}

  ngOnInit(): void {
    // Cargar las unidades disponibles
    this.unidadService.getUnidades().subscribe((data) => {
      this.unidades = data;
    });

    // Cargar los tipos de reto disponibles
    this.tipoRetoService.getTiposReto().subscribe((data) => {
      this.tiposReto = data;
    });

    // Cargar datos si es edición
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.retoService.getReto(+id).subscribe((data) => {
        this.reto = data;
      });
    }
  }

  saveReto(): void {
    if (this.isEdit) {
      this.retoService.updateReto(this.reto.id, this.reto).subscribe(() => {
        this.router.navigate(['/reto']);
      });
    } else {
      this.retoService.createReto(this.reto).subscribe(() => {
        this.router.navigate(['/reto']);
      });
    }
  }
}