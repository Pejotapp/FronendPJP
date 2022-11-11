import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajo } from '../Models/trabajo';

@Injectable({
  providedIn: 'root'
})
export class STrabajoService {

  private URL = 'https://backpjp.herokuapp.com/trabajo';

  constructor(private http: HttpClient) {}

  public lista(): Observable<Trabajo[]> {
    return this.http.get<Trabajo[]>(`${this.URL}/lista`);
  }

  public save(trabajo: Trabajo): Observable<Trabajo> {
    return this.http.post<Trabajo>(`${this.URL}/crear`, trabajo);
  }

  public listaPorId(id: number): Observable<Trabajo> {
    return this.http.get<Trabajo>(`${this.URL}/traer/${id}`);
  }

  public update(id: number, trabajo: Trabajo): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, trabajo);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}