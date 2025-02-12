import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'; // Para <mat-select>
import { ActivatedRoute, Router } from '@angular/router';
import { TemaService, Tema } from '../tema.service';
import { UnidadService,Unidad } from '../../unidad/unidad.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tema-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule, // Asegúrate de incluir MatSelectModule
    RouterModule,
    NgFor
  ],
  templateUrl: './tema-form.component.html',
  styleUrls: ['./tema-form.component.css'],
})
export class TemaFormComponent implements OnInit {
  tema: Tema = {
    id: 0,
    id_unidad: 0,
    titulo: '',
    orden: null,
    vigente: 'S',
    unidad: ''
  };

  unidades: Unidad[] = [];
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private temaService: TemaService,
    private unidadService: UnidadService
  ) {}

  ngOnInit(): void {
    // Cargar las unidades disponibles
    this.unidadService.getUnidades().subscribe((data) => {
      this.unidades = data;
    });

    // Cargar datos si es edición
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.temaService.getTema(+id).subscribe((data) => {
        this.tema = data;
      });
    }
  }

  saveTema(): void {
    if (this.isEdit) {
      this.temaService.updateTema(this.tema.id, this.tema).subscribe(() => {
        this.router.navigate(['/tema']);
      });
    } else {
      this.temaService.createTema(this.tema).subscribe(() => {
        this.router.navigate(['/tema']);
      });
    }
  }
}