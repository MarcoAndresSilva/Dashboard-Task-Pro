  import { Component, OnInit, OnDestroy} from '@angular/core';
  import { Subscription } from 'rxjs';
  import { Task } from '../../models/task.model';
  import { TaskService } from '../../services/task.service';

  @Component({
    selector: 'app-task-list',
    standalone: false,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.scss'
  })

  export class TaskListComponent implements OnInit, OnDestroy  {
    tasks: Task[] = []; // array vacio que se llenara con el servicio
    isLoading = false;
    error: string | null = null;

    private tasksSubscription: Subscription | undefined;

    constructor(private taskService: TaskService) { } // inyectamos el servicio

    ngOnInit(): void { 
      this.tasksSubscription = this.taskService.getTasks().subscribe( tasks => {
        this.tasks = tasks;
        this.isLoading = false;
        console.log('tareas obtenidas del servicios, lista de tareas actualizadas en el componente', this.tasks);
      });

      this.isLoading = true;
      this.error = null;
      this.taskService.fetchAndSetTasks().subscribe({
        next: () => console.log('tareas actualizadas'),
        error: error => {
          console.error('Error al cargar las tareas en el componente', error);
          // TODO agregar mat-snackbar
        }
        
      })
    }

    handleDeleteTask(taskToDelete: Task): void{
      this.taskService.deleteTask(taskToDelete.id).subscribe({
        next: () => console.log('Tarea, ${taskToDelete.id} eliminada'),
        error: err => { 
          this.error = err;
          console.error('Error al eliminar la tarea', err);
        }
      });
    }

    handleUpdateTask(taskToUpdate: Task): void {
      console.log('Iniciando actualizacion de la Tarea', taskToUpdate);
      this.taskService.updateTask(taskToUpdate).subscribe({
        next: (updateTask) => {
          console.log('Tarea actualizada correctamente', updateTask);
        },
        error: err => { 
          this.error = err;
          console.error('Error al actualizar la tarea', err);
        }
      });
    }

    trackByTaskId(index: number, task: Task): string | number {
      return task.id;
    }

    ngOnDestroy(): void {
      if(this.tasksSubscription){
        this.tasksSubscription.unsubscribe();
      }
    }
  }
  