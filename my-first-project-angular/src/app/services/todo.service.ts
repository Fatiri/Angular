import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Todo } from '../module/Todo';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor( private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
  return  this.http.get<Todo[]>(this.todosUrl);
  }
}
