import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PersonaService, Persona } from '../persona.service';

@Component({
  selector: 'app-persona-form',
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
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css'],
})
export class PersonaFormComponent implements OnInit {
  persona: Persona = {
    id: 0,
    tipo_id: 'CC',
    nombre_1: '',
    nombre_2: '',
    apellido_1: '',
    apellido_2: '',
    identificacion: '',
    vigente: 'S',
    contrasena: '000000000',
    name_user: '',
    email: '',
  };

  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personaService: PersonaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.personaService.getPersona(+id).subscribe((data) => {
        this.persona = data;
      });
    }
  }

  savePersona(): void {
    if (this.isEdit) {
      this.personaService.updatePersona(this.persona.id, this.persona).subscribe(() => {
        this.router.navigate(['/persona']);
      });
    } else {
      this.personaService.createPersona(this.persona).subscribe(() => {
        this.router.navigate(['/persona']);
      });
    }
  }
}