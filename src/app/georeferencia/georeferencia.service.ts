import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export interface Georeferencia {
  id: number; // int8
  id_reto_pregunta: number; // int8
  latitud: number; // float8
  longitud: number; // float8
  reto_pregunta: string;
}

@Injectable({
  providedIn: 'root',
})
export class GeoreferenciaService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/georeferencia'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  getGeoreferencias(): Observable<Georeferencia[]> {
    return this.http.get<Georeferencia[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  getGeoreferencia(id: number): Observable<Georeferencia> {
    return this.http.get<Georeferencia>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  createGeoreferencia(georeferencia: Georeferencia): Observable<Georeferencia> {
    return this.http.post<Georeferencia>(this.apiUrl, georeferencia).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  updateGeoreferencia(id: number, georeferencia: Georeferencia): Observable<Georeferencia> {
    return this.http.put<Georeferencia>(`${this.apiUrl}/${id}`, georeferencia).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  deleteGeoreferencia(id: number): Observable<void> {
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