import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export interface RetoPregunta {
  id: number; // int8
  id_reto: number; // int8
  titulo: string | null; // text
  pregunta: string | null; // text
  url_imagen: string | null; // text
  id_dimension: number | null; // int8
  dimension:string | null;
}

@Injectable({
  providedIn: 'root',
})
export class RetoPreguntaService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/reto-pregunta'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  getRetoPreguntas(): Observable<RetoPregunta[]> {
    return this.http.get<RetoPregunta[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  getRetoPregunta(id: number): Observable<RetoPregunta> {
    return this.http.get<RetoPregunta>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  createRetoPregunta(retoPregunta: RetoPregunta): Observable<RetoPregunta> {
    return this.http.post<RetoPregunta>(this.apiUrl, retoPregunta).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  updateRetoPregunta(id: number, retoPregunta: RetoPregunta): Observable<RetoPregunta> {
    return this.http.put<RetoPregunta>(`${this.apiUrl}/${id}`, retoPregunta).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  deleteRetoPregunta(id: number): Observable<void> {
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