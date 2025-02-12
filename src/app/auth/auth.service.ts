import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private apiUrl = 'https://backend-2s8j.onrender.com/auth/login';  

  constructor(private http: HttpClient) {}

  /**
   * Método para iniciar sesión enviando username y password.
   * @param username - Nombre de usuario.
   * @param password - Contraseña del usuario.
   * @returns Un Observable con la respuesta de la API.
   */
  login(username: string, password: string): Observable<any> {
    // Cuerpo de la solicitud (los campos requeridos por la API)
    const body = {
      username: username,
      password: password,
    };

    // Opciones de la solicitud (si necesitas encabezados personalizados)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', // Especifica que enviamos JSON
      }),
    };

    // Realiza la solicitud POST a la API
    return this.http.post(this.apiUrl, body, httpOptions).pipe(
      map((response: any) => {
        // Aquí puedes manejar la respuesta, como guardar el token en sessionStorage
        if (response && response.token) {
          sessionStorage.setItem('authToken', response.token); // Guarda el token
        }
        return response; // Devuelve la respuesta para que otros componentes la usen
      }),
      catchError((error) => {
        // Manejo de errores
        console.error('Error en la autenticación:', error);
        return throwError(() => new Error('Error al iniciar sesión. Verifica tus credenciales.'));
      })
    );
  }

  /**
   * Método para cerrar sesión.
   */
  logout(): void {    
    sessionStorage.removeItem('authToken');
  }

  /**
   * Método para verificar si el usuario está autenticado.
   * @returns `true` si hay un token en el sessionStorage, `false` en caso contrario.
   */
  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('authToken');
    return !!token; // Retorna `true` si existe un token, `false` si no.
  }
}