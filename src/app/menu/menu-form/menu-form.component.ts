import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MenuService, Menu } from '../menu.service';

@Component({
  selector: 'app-menu-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    RouterModule
  ],
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css'],
})
export class MenuFormComponent implements OnInit {
  menu: Menu = {
    id: '',
    descripcion: '',
    estado: false,
    todos: false,
  };

  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.menuService.getMenu(id).subscribe((data) => {
        this.menu = data;
      });
    }
  }

  saveMenu(): void {
    if (this.isEdit) {
      this.menuService.updateMenu(this.menu.id, this.menu).subscribe(() => {
        this.router.navigate(['/menu']);
      });
    } else {
      this.menuService.createMenu(this.menu).subscribe(() => {
        this.router.navigate(['/menu']);
      });
    }
  }
}