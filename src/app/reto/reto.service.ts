import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export interface Reto {
  id: number; // int8
  id_unidad: number; // int8
  id_tipo_reto: number; // int8
  url: string | null; // text
  vigente: string; // "S" o "N"
  unidad: string; // Nombre de la unidad
  tipo_reto: string;
}

@Injectable({
  providedIn: 'root',
})
export class RetoService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/reto'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  getRetos(): Observable<Reto[]> {
    return this.http.get<Reto[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  getReto(id: number): Observable<Reto> {
    return this.http.get<Reto>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  createReto(reto: Reto): Observable<Reto> {
    return this.http.post<Reto>(this.apiUrl, reto).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  updateReto(id: number, reto: Reto): Observable<Reto> {
    return this.http.put<Reto>(`${this.apiUrl}/${id}`, reto).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  deleteReto(id: number): Observable<void> {
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