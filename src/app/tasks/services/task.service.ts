import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs'
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

  private apiurl = 'https://dummyjson.com/todos';

  private tasks$ = new BehaviorSubject<Task[]>([]); // el behaviorSubject empieza con un array vacio

constructor(private http: HttpClient) { }

// funcion para obtener las tareas, simula una llamada a una API
getTasks(): Observable<Task[]> {
  return this.tasks$.asObservable(); // 'of' es una función de RxJS que crea un Observable a partir de un valor.
}

addTask(taskData: { title: string; description: string }): void {
  const newTask: Task = {
    id: this.tasks$.value.length + 1,
    completed: false,
    ...taskData
  };
  
  const currentTasks = this.tasks$.getValue();
  this.tasks$.next([...currentTasks, newTask]);
}

//update task se encargara de cambiar el estado de 'completed' de la tarea
updateTask(taskToUpdate: Task): Observable<Task> {
  const task = this.tasks$.value.find(t => t.id === taskToUpdate.id); 
  if (task) {
    task.completed = !task.completed;
  }
  return of(task as Task);
}


}
