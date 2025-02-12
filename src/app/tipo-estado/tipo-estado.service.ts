import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TipoEstado {
  id: number; // ID del tipo de estado
  descripcion: string; // Nombre del tipo de estado
}

@Injectable({
  providedIn: 'root',
})
export class TipoEstadoService {
  private apiUrl = 'https://backend-2s8j.onrender.com/api/tipo-estado'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los tipos de estado
  getTiposEstado(): Observable<TipoEstado[]> {
    return this.http.get<TipoEstado[]>(this.apiUrl);
  }

  // Obtener un tipo de estado por su ID
  getTipoEstado(id: number): Observable<TipoEstado> {
    return this.http.get<TipoEstado>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo tipo de estado
  createTipoEstado(tipoEstado: TipoEstado): Observable<TipoEstado> {
    return this.http.post<TipoEstado>(this.apiUrl, tipoEstado);
  }

  // Actualizar un tipo de estado existente
  updateTipoEstado(id: number, tipoEstado: TipoEstado): Observable<TipoEstado> {
    return this.http.put<TipoEstado>(`${this.apiUrl}/${id}`, tipoEstado);
  }

  // Eliminar un tipo de estado
  deleteTipoEstado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}