import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContenidoService, Contenido } from '../contenido.service';
import { TemaService,Tema } from '../../tema/tema.service';
import { TipoContenidoService, TipoContenido } from '../../tipo-contenido/tipo-contenido.service';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-contenido-form',
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
  ], // Importa los módulos de Angular Material
  templateUrl: './contenido-form.component.html',
  styleUrls: ['./contenido-form.component.css'],
})
export class ContenidoFormComponent implements OnInit {
  contenido: Contenido = {
    id: 0,
    id_tipo_contenido: 0,
    id_tema: 0,
    nombre: '',
    url: '',
    tema: '',
    tipo_contenido:''
  };

  tiposContenido: TipoContenido[] = [];
  temas: Tema[] = [];
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contenidoService: ContenidoService,
    private tipoContenidoService: TipoContenidoService,
    private temaService: TemaService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    // Cargar los tipos de contenido disponibles
    this.tipoContenidoService.getTiposContenido().subscribe((data) => {
      this.tiposContenido = data;
    });

    // Cargar los temas disponibles
    this.temaService.getTemas().subscribe((data) => {
      this.temas = data;
    });

    // Cargar datos si es edición
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.contenidoService.getContenido(+id).subscribe((data) => {
        this.contenido = data;
      });
    }
  }

  saveContenido(): void {
    if (this.isEdit) {
      this.contenidoService.updateContenido(this.contenido.id, this.contenido).subscribe(() => {
        this.alertService.showSuccessAlert('Realizado Exitosamente')
        this.router.navigate(['/contenido']);
      });
    } else {
      this.contenidoService.createContenido(this.contenido).subscribe(() => {
        this.alertService.showSuccessAlert('Realizado Exitosamente')
        this.router.navigate(['/contenido']);
      });
    }
  }
}