import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export interface Tema {
  id: number;
  id_unidad: number;
  titulo: string | null;
  orden: number | null;
  vigente: string;
  unidad: string;
}

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/tema'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  getTemas(): Observable<Tema[]> {
    return this.http.get<Tema[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  getTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  createTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>(this.apiUrl, tema).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  updateTema(id: number, tema: Tema): Observable<Tema> {
    return this.http.put<Tema>(`${this.apiUrl}/${id}`, tema).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );;
  }

  deleteTema(id: number): Observable<void> {
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