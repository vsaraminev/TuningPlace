import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const createP = 'http://localhost:5000/project/create';
const getAllP = 'http://localhost:5000/project/all';
const getSingleP = 'http://localhost:5000/project/details/';
const getUserP = 'http://localhost:5000/project/user';
const deleteP = 'http://localhost:5000/project/delete/';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  createProject(data) {
    console.log(data);
    return this.http.post(createP, data);
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(getAllP)
  }

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(getSingleP + id);
  }

  getUserProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(getUserP);
  }

  deleteProject(id: string) {
    return this.http.delete(deleteP + id);
  }
}
