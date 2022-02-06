import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chargestation } from './chargestation';

@Injectable({
  providedIn: 'root',
})
export class ChargestationService {
  private baseUrl = 'http://localhost:10000/api/v1/chargeStations';

  constructor(private httpClient: HttpClient) {}

  getAllStations(): Observable<Chargestation[]> {
    return this.httpClient.get<[Chargestation]>(`${this.baseUrl}`);
  }

  createStation(chargeStation: Chargestation): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, chargeStation);
  }

  deleteStation(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
