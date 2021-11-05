import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from '../models/voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http : HttpClient) { }

  findAll() : Observable<Voiture[]> {
    return this.http.get<Voiture[]>("http://localhost:3000/voitures");
  }

  findById(id : number) : Observable<Voiture> {
    return this.http.get<Voiture>(`http://localhost:3000/voitures/${id}`);
  }

  add(voiture : Voiture) : Observable<Voiture> {
    return this.http.post<Voiture>("http://localhost:3000/voitures", voiture);
  }

  delete(id : number) : Observable<Voiture> {
    return this.http.delete<Voiture>(`http://localhost:3000/voitures/${id}`);
  }

  update(id : number, voiture : Voiture) : Observable<Voiture> {
    return this.http.put<Voiture>(`http://localhost:3000/voitures/${id}`, voiture);
  }
}
