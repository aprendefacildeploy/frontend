import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

// Definición de la interfaz Reporte
export interface Reporte {
  id: string; // text
  nombre: string | null; // text
  descripcion: string | null;
  sql: string | null; // text
}

@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/reporte'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  /**
   * Método para obtener todos los reportes.
   * @returns Un Observable con la lista de reportes.
   */
  getReportes(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  /**
   * Método para obtener un reporte por su ID.
   * @param id - El ID del reporte.
   * @returns Un Observable con los detalles del reporte.
   */
  getReporte(id: string): Observable<Reporte> {
    return this.http.get<Reporte>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  generateReporte(id: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    return this.http.get(`${this.apiUrl}/generar/${id}`, {
      responseType: 'blob',
      headers,
    }).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  /**
   * Método para crear un nuevo reporte.
   * @param reporte - Los datos del nuevo reporte.
   * @returns Un Observable con el reporte creado.
   */
  createReporte(reporte: Reporte): Observable<Reporte> {
    return this.http.post<Reporte>(this.apiUrl, reporte).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  /**
   * Método para actualizar un reporte existente.
   * @param id - El ID del reporte a actualizar.
   * @param reporte - Los datos actualizados del reporte.
   * @returns Un Observable con el reporte actualizado.
   */
  updateReporte(id: string, reporte: Reporte): Observable<Reporte> {
    return this.http.put<Reporte>(`${this.apiUrl}/${id}`, reporte).pipe(
      catchError((error) => {
        // Puedes loguear el error o manejarlo aquí
        console.error('Error al eliminar el contenido:', error);
        // Lanzar el error para que el componente lo maneje
        throw error;
      })
    );
  }

  /**
   * Método para eliminar un reporte.
   * @param id - El ID del reporte a eliminar.
   * @returns Un Observable que indica si la eliminación fue exitosa.
   */
  deleteReporte(id: string): Observable<void> {
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