import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MenuService, Menu } from '../menu.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatTableModule, MatIconModule],
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  menus: Menu[] = [];
  displayedColumns: string[] = ['id', 'descripcion', 'estado', 'todos', 'acciones'];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.loadMenus();
  }

  loadMenus(): void {
    this.menuService.getMenus().subscribe((data) => {
      this.menus = data;
    });
  }

  deleteMenu(id: string): void {
    if (confirm('¿Estás seguro de eliminar este menú?')) {
      this.menuService.deleteMenu(id).subscribe(() => {
        this.loadMenus(); // Refrescar la lista
      });
    }
  }
}