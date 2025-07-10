import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs'
import { Task } from '../models/task.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks$ = new BehaviorSubject<Task[]>([ 
    { id: 1, title: 'Configurar la arquitectura del proyecto', completed: true, description: 'Usar módulos y lazy loading.' },
    { id: 2, title: 'Crear componente de lista de tareas', completed: true, description: 'Este componente.' },
    { id: 3, title: 'Crear componente de items de tareas', completed: true, description: 'Otro componente para cada tarea.' },
    { id: 4, title: 'Añadir comunicación entre componentes', completed: true, description: 'Usar @Input y @Output.' },
    { id: 5, title: 'Implementar un servicio para las tareas', completed: true, description: 'Mover la lógica a un servicio inyectable.' },
    { id: 6, title: 'Crear un formulario para agregar tareas', completed: false, description: 'Usar Reactive Forms.' },
    { id: 7, title: 'Implementar validaciones en el formulario', completed: false, description: 'Usar Validators.' },
    { id: 8, title: 'Implementar una barra de navegación', completed: false, description: 'Usar Router.' },
  ]);

constructor() { }

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
