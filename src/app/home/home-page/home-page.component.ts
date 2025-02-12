import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Importa MatCardModule
import { MatButtonModule } from '@angular/material/button'; // Importa MatButtonModule
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatCardModule, // Agrega MatCardModule aquí
    MatButtonModule,
    RouterModule // Agrega MatButtonModule aquí
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {

  constructor(private router: Router){}

  cerrarSesion(): void {
    sessionStorage.removeItem('authToken');
    this.router.navigate(['/auth/login']);
  }
}