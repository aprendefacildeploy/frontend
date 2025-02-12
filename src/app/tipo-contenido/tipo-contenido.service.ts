import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export interface TipoContenido {
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root',
})
export class TipoContenidoService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/tipo-contenido'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  getTiposContenido(): Observable<TipoContenido[]> {
    return this.http.get<TipoContenido[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  getTipoContenido(id: number): Observable<TipoContenido> {
    return this.http.get<TipoContenido>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  createTipoContenido(tipoContenido: TipoContenido): Observable<TipoContenido> {
    return this.http.post<TipoContenido>(this.apiUrl, tipoContenido).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  updateTipoContenido(id: number, tipoContenido: TipoContenido): Observable<TipoContenido> {
    return this.http.put<TipoContenido>(`${this.apiUrl}/${id}`, tipoContenido).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  deleteTipoContenido(id: number): Observable<void> {
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