import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export interface PersonaUnidad {
  id: number; // int8
  id_persona: number; // int8
  id_unidad: number; // int8
  id_tipo_estado: number; // int8
  fecha_inicio: string | null; // timestamptz
  persona: string;
  unidad: string;
  tipo_estado: string;
}

@Injectable({
  providedIn: 'root',
})
export class PersonaUnidadService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/persona-unidad'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  getAsignaciones(): Observable<PersonaUnidad[]> {
    return this.http.get<PersonaUnidad[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  getAsignacion(id: number): Observable<PersonaUnidad> {
    return this.http.get<PersonaUnidad>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  createAsignacion(asignacion: PersonaUnidad): Observable<PersonaUnidad> {
    return this.http.post<PersonaUnidad>(this.apiUrl, asignacion).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  updateAsignacion(id: number, asignacion: PersonaUnidad): Observable<PersonaUnidad> {
    return this.http.put<PersonaUnidad>(`${this.apiUrl}/${id}`, asignacion).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  deleteAsignacion(id: number): Observable<void> {
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