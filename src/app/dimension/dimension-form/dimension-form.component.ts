import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DimensionService, Dimension } from '../dimension.service';

@Component({
  selector: 'app-dimension-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule
  ],
  templateUrl: './dimension-form.component.html',
  styleUrls: ['./dimension-form.component.css'],
})
export class DimensionFormComponent implements OnInit {
  dimension: Dimension = {
    id: 0,
    descripcion: '',
    nombre: ''
  };

  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dimensionService: DimensionService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.dimensionService.getDimension(+id).subscribe((data) => {
        this.dimension = data;
      });
    }
  }

  saveDimension(): void {
    if (this.isEdit) {
      this.dimensionService.updateDimension(this.dimension.id, this.dimension).subscribe(() => {
        this.router.navigate(['/dimension']);
      });
    } else {
      this.dimensionService.createDimension(this.dimension).subscribe(() => {
        this.router.navigate(['/dimension']);
      });
    }
  }
}