import { Part } from '../models/part';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const createPart = 'http://localhost:5000/part/create';
const getAllParts = 'http://localhost:5000/part/all';
const getSinglePart = 'http://localhost:5000/part/details/';
const editPart = 'http://localhost:5000/part/edit/';
const buyPart = 'http://localhost:5000/part/buy/';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(private http: HttpClient) { }

  createPart(data) {
    return this.http.post(createPart, data);
  }
  getAllParts(): Observable<Part[]> {
    return this.http.get<Part[]>(getAllParts);
  }

  getPart(id: string): Observable<Part> {
    return this.http.get<Part>(getSinglePart + id);
  }

  editPart(id: string, data: Part) {
    return this.http.put(editPart + id, data);
  }

  buyPart(id: string) {
    return this.http.post(buyPart + id, {});
  }
}
