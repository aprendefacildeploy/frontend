import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { UnidadService, Unidad } from '../unidad.service';

@Component({
  selector: 'app-unidad-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule
  ],
  templateUrl: './unidad-form.component.html',
  styleUrls: ['./unidad-form.component.css'],
})
export class UnidadFormComponent implements OnInit {
  unidad: Unidad = {
    id: 0,
    nombre: '',
    descripcion: '',
    orden: null,
    vigente: 'S',
    url_imagen: '',
  };

  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unidadService: UnidadService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.unidadService.getUnidad(+id).subscribe((data) => {
        this.unidad = data;
      });
    }
  }

  saveUnidad(): void {
    if (this.isEdit) {
      this.unidadService.updateUnidad(this.unidad.id, this.unidad).subscribe(() => {
        this.router.navigate(['/unidad']);
      });
    } else {
      this.unidadService.createUnidad(this.unidad).subscribe(() => {
        this.router.navigate(['/unidad']);
      });
    }
  }
}