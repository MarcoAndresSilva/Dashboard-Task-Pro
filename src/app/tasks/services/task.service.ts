import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs'
import { map, catchError, tap } from 'rxjs/operators';
import { Task } from '../models/task.model';

interface TodosApiResponse {
  todos: Task[];
  total : number;
  skip: number;
  limit: number
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'https://dummyjson.com/todos';
  private tasks$ = new BehaviorSubject<Task[]>([]); // el behaviorSubject empieza con un array vacio

constructor(private http: HttpClient) { }

// funcion para obtener las tareas, simula una llamada a una API
getTasks(): Observable<Task[]> {
  return this.tasks$.asObservable(); // 'of' es una función de RxJS que crea un Observable a partir de un valor.
}

fetchAndSetTasks(): Observable<Task[]> {
    return this.http.get<TodosApiResponse>(this.apiUrl).pipe(
      map((response) => response.todos),  
      tap(tasks => this.tasks$.next(tasks)),
      catchError(this.handleError)
    )
}

addTask(taskData:{todo: string; description: string}):Observable<Task>{
  const newTaskPayload = {
    todo: taskData.todo,
    completed: false,
    userId: 5,
  };

  return this.http.post<Task>(`${this.apiUrl}/add`, newTaskPayload).pipe(
    tap((newTaskFromApi) => {
      console.log('Nueva tarea creada via API', newTaskFromApi);
      
      const currentTasks = this.tasks$.getValue();
      this.tasks$.next([...currentTasks, newTaskFromApi]);
    }),
    catchError(this.handleError)
  );
}

deleteTask(id:string | number): Observable<Task>{
  return this.http.delete<Task>(`${this.apiUrl}/${id}`).pipe(
    tap(() =>{
      const currenTasks = this.tasks$.getValue();
      const updateTask  = currenTasks.filter(task => task.id !== id);
      this.tasks$.next(updateTask);
    }),
    catchError(this.handleError)
  );
}

private handleError(error: any): Observable<never>{
  console.log('Ocurrio un error en le servicio  de tareas', error);
  return throwError('Algo salio mal, por favor intente denuevo mas tarde')
}




}
