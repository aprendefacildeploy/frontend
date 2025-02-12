import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export interface MenuPersona {
  id_menu: string; // text
  id_persona: number; // int8
  estado: boolean | null; // bool
}

@Injectable({
  providedIn: 'root',
})
export class MenuPersonaService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/menu-persona'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  getMenuPersonas(): Observable<MenuPersona[]> {
    return this.http.get<MenuPersona[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  getMenuPersona(id_menu: string, id_persona: number): Observable<MenuPersona> {
    return this.http.get<MenuPersona>(`${this.apiUrl}/${id_menu}/${id_persona}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  createMenuPersona(menuPersona: MenuPersona): Observable<MenuPersona> {
    return this.http.post<MenuPersona>(this.apiUrl, menuPersona).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  updateMenuPersona(id_menu: string, id_persona: number, menuPersona: MenuPersona): Observable<MenuPersona> {
    return this.http.put<MenuPersona>(`${this.apiUrl}/${id_menu}/${id_persona}`, menuPersona).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  deleteMenuPersona(id_menu: string, id_persona: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id_menu}/${id_persona}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }
}