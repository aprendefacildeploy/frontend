import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export interface Unidad {
  id: number; // int8
  nombre: string | null; // text
  descripcion: string | null; // text
  orden: number | null; // int4
  vigente: string; // "S" o "N"
  url_imagen: string | null; // text
}

@Injectable({
  providedIn: 'root',
})
export class UnidadService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/unidad'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  getUnidades(): Observable<Unidad[]> {
    return this.http.get<Unidad[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  getUnidad(id: number): Observable<Unidad> {
    return this.http.get<Unidad>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  createUnidad(unidad: Unidad): Observable<Unidad> {
    return this.http.post<Unidad>(this.apiUrl, unidad).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  updateUnidad(id: number, unidad: Unidad): Observable<Unidad> {
    return this.http.put<Unidad>(`${this.apiUrl}/${id}`, unidad).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  deleteUnidad(id: number): Observable<void> {
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