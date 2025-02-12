import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export interface RetoPreguntaOpcion {
  id: number; // int8
  id_reto_pregunta: number; // int8
  descripcion: string; // text
  url_imagen: string; // text
  correcta: boolean; // bool
}

@Injectable({
  providedIn: 'root',
})
export class RetoPreguntaOpcionService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/reto-pregunta-opcion'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  getRetoPreguntaOpciones(): Observable<RetoPreguntaOpcion[]> {
    return this.http.get<RetoPreguntaOpcion[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  getRetoPreguntaOpcion(id: number): Observable<RetoPreguntaOpcion> {
    return this.http.get<RetoPreguntaOpcion>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  createRetoPreguntaOpcion(opcion: RetoPreguntaOpcion): Observable<RetoPreguntaOpcion> {
    return this.http.post<RetoPreguntaOpcion>(this.apiUrl, opcion).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  updateRetoPreguntaOpcion(id: number, opcion: RetoPreguntaOpcion): Observable<RetoPreguntaOpcion> {
    return this.http.put<RetoPreguntaOpcion>(`${this.apiUrl}/${id}`, opcion).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  deleteRetoPreguntaOpcion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }
}