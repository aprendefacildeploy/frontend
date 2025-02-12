import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export interface TipoReto {
  id: number; // int8
  nombre: string; // text
  descripcion: string | null; // text
  subtitulo: string; // text
}

@Injectable({
  providedIn: 'root',
})
export class TipoRetoService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/tipo-reto'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  getTiposReto(): Observable<TipoReto[]> {
    return this.http.get<TipoReto[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  getTipoReto(id: number): Observable<TipoReto> {
    return this.http.get<TipoReto>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  createTipoReto(tipoReto: TipoReto): Observable<TipoReto> {
    return this.http.post<TipoReto>(this.apiUrl, tipoReto).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  updateTipoReto(id: number, tipoReto: TipoReto): Observable<TipoReto> {
    return this.http.put<TipoReto>(`${this.apiUrl}/${id}`, tipoReto).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  deleteTipoReto(id: number): Observable<void> {
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