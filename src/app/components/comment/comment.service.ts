import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const createComment = 'http://localhost:5000/comment/create';
const getProjectComments = 'http://localhost:5000/comment/allByProject/';
const deleteComment = 'http://localhost:5000/comment/delete/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient

  ) { }

  createComment(data) {
    return this.http.post(createComment, data);
  }

  getAllForProject(id: string){
    return this.http.get<Comment[]>(getProjectComments + id);
  }

  deleteComment(id: string) {
    return this.http.delete(deleteComment + id);
  }
}
