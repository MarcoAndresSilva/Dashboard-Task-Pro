import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs'
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    // ahora lso datos viven aqui por eso es privado
    private tasks: Task[] = [ 
      { id: 1, title: 'Configurar la arquitectura del proyecto', completed: true, description: 'Usar módulos y lazy loading.' },
      { id: 2, title: 'Crear componente de lista de tareas', completed: true, description: 'Este componente.' },
      { id: 3, title: 'Crear componente de items de tareas', completed: true, description: 'Otro componente para cada tarea.' },
      { id: 4, title: 'Añadir comunicación entre componentes', completed: true, description: 'Usar @Input y @Output.' },
      { id: 5, title: 'Implementar un servicio para las tareas', completed: true, description: 'Mover la lógica a un servicio inyectable.' },
      { id: 6, title: 'Crear un formulario para agregar tareas', completed: false, description: 'Usar Reactive Forms.' },
      { id: 7, title: 'Implementar validaciones en el formulario', completed: false, description: 'Usar Validators.' },
      { id: 8, title: 'Implementar una barra de navegación', completed: false, description: 'Usar Router.' },
    ];

  constructor() { }

  // funcion para obtener las tareas, simula una llamada a una API
  getTasks(): Observable<Task[]> {
  return of(this.tasks); // 'of' es una función de RxJS que crea un Observable a partir de un valor.
}

  //update task se encargara de cambiar el estado de 'completed' de la tarea
  updateTask(taskToUpdate: Task): Observable<Task> {
    const task = this.tasks.find(t => t.id === taskToUpdate.id); 
    if (task) {
      task.completed = !task.completed;
    }
    return of(task as Task);
  }


}
