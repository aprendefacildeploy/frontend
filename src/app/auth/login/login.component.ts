import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,    
    RouterModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm): void {
    const { username, password } = form.value;

    this.authService.login(username, password).subscribe({
      next: (response) => {
        // Si la autenticación es exitosa, redirige al usuario        
        this.router.navigate(['/home']); // Redirige a la página principal
      },
      error: (err) => {
        // Muestra un mensaje de error si falla la autenticación
        this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
      },
    });
  }
}