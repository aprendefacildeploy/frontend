import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export interface Dimension {
  id: number; // int8
  descripcion: string | null; // text
  nombre: string| null;
}

@Injectable({
  providedIn: 'root',
})
export class DimensionService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/dimension'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  getDimensiones(): Observable<Dimension[]> {
    return this.http.get<Dimension[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  getDimension(id: number): Observable<Dimension> {
    return this.http.get<Dimension>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  createDimension(dimension: Dimension): Observable<Dimension> {
    return this.http.post<Dimension>(this.apiUrl, dimension).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  updateDimension(id: number, dimension: Dimension): Observable<Dimension> {
    return this.http.put<Dimension>(`${this.apiUrl}/${id}`, dimension).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  deleteDimension(id: number): Observable<void> {
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