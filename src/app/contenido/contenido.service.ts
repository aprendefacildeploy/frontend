import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export interface Contenido {
  id: number;
  id_tipo_contenido: number;
  id_tema: number;
  nombre: string;
  url: string;
  tipo_contenido: string;
  tema: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContenidoService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/contenido';

  constructor(private http: HttpClient) {}

  getContenidos(): Observable<Contenido[]> {
    return this.http.get<Contenido[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  getContenido(id: number): Observable<Contenido> {
    return this.http.get<Contenido>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  createContenido(contenido: Contenido): Observable<Contenido> {
    return this.http.post<Contenido>(this.apiUrl, contenido).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  updateContenido(id: number, contenido: Contenido): Observable<Contenido> {
    return this.http.put<Contenido>(`${this.apiUrl}/${id}`, contenido).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  deleteContenido(id: number): Observable<void> {
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