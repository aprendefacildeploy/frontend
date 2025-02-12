import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TipoContenidoService, TipoContenido } from '../tipo-contenido.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-tipo-contenido-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule,
  ],
  templateUrl: './tipo-contenido-form.component.html',
  styleUrls: ['./tipo-contenido-form.component.css'],
})
export class TipoContenidoFormComponent implements OnInit {
  tipoContenido: TipoContenido = { id: 0, nombre: '' };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tipoContenidoService: TipoContenidoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.tipoContenidoService.getTipoContenido(+id).subscribe((data) => {
        this.tipoContenido = data;
      });
    }
  }

  saveTipoContenido(): void {
    if (this.isEdit) {
      // Actualizar un tipo de contenido existente
      this.tipoContenidoService.updateTipoContenido(this.tipoContenido.id, this.tipoContenido).subscribe(() => {
        this.router.navigate(['/tipo-contenido']); // Redirige al listado
      });
    } else {
      // Crear un nuevo tipo de contenido
      this.tipoContenidoService.createTipoContenido(this.tipoContenido).subscribe(() => {
        this.router.navigate(['/tipo-contenido']); // Redirige al listado
      });
    }
  }
}