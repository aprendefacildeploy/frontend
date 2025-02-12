import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor } from '@angular/common';
import { MenuPersonaService, MenuPersona } from '../menu-persona.service';
import { MenuService, Menu } from '../../menu/menu.service';
import { PersonaService, Persona } from '../../persona/persona.service';

@Component({
  selector: 'app-menu-persona-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './menu-persona-form.component.html',
  styleUrls: ['./menu-persona-form.component.css'],
})
export class MenuPersonaFormComponent implements OnInit {
  menuPersona: MenuPersona = {
    id_menu: '',
    id_persona: 0,
    estado: false,
  };

  menus: Menu[] = []; // Listado de menús
  personas: Persona[] = []; // Listado de personas
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuPersonaService: MenuPersonaService,
    private menuService: MenuService, // Inyecta el servicio de menús
    private personaService: PersonaService // Inyecta el servicio de personas
  ) {}

  ngOnInit(): void {
    // Cargar los menús disponibles
    this.menuService.getMenus().subscribe((data) => {
      this.menus = data;
    });

    // Cargar las personas disponibles
    this.personaService.getPersonas().subscribe((data) => {
      this.personas = data;
    });

    // Cargar datos si es edición
    const id_menu = this.route.snapshot.paramMap.get('id_menu');
    const id_persona = this.route.snapshot.paramMap.get('id_persona');
    if (id_menu && id_persona) {
      this.isEdit = true;
      this.menuPersonaService.getMenuPersona(id_menu, +id_persona).subscribe((data) => {
        this.menuPersona = data;
      });
    }
  }

  saveMenuPersona(): void {
    if (this.isEdit) {
      this.menuPersonaService.updateMenuPersona(this.menuPersona.id_menu, this.menuPersona.id_persona, this.menuPersona).subscribe(() => {
        this.router.navigate(['/menu-persona']);
      });
    } else {
      this.menuPersonaService.createMenuPersona(this.menuPersona).subscribe(() => {
        this.router.navigate(['/menu-persona']);
      });
    }
  }
}