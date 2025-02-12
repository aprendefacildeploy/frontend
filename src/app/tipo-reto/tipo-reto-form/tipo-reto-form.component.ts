import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TipoRetoService, TipoReto } from '../tipo-reto.service';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-tipo-reto-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule,
    MatOptionModule
  ],
  templateUrl: './tipo-reto-form.component.html',
  styleUrls: ['./tipo-reto-form.component.css'],
})
export class TipoRetoFormComponent implements OnInit {
  tipoReto: TipoReto = {
    id: 0,
    nombre: '',
    descripcion: '',
    subtitulo: '',
  };

  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tipoRetoService: TipoRetoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.tipoRetoService.getTipoReto(+id).subscribe((data) => {
        this.tipoReto = data;
      });
    }
  }

  saveTipoReto(): void {
    if (this.isEdit) {
      this.tipoRetoService.updateTipoReto(this.tipoReto.id, this.tipoReto).subscribe(() => {
        this.router.navigate(['/tipo-reto']);
      });
    } else {
      this.tipoRetoService.createTipoReto(this.tipoReto).subscribe(() => {
        this.router.navigate(['/tipo-reto']);
      });
    }
  }
}