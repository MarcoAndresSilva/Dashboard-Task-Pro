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
        error: err => this.error = err
      });
    }

    handleUpdateTask(taskToUpdate: Task): void {
      //TODO logica para llamar al futuro updateTask en el servicio
      console.log('actualizando tarea, logica pendiente', taskToUpdate);
      
    }

    ngOnDestroy(): void {
      if(this.tasksSubscription){
        this.tasksSubscription.unsubscribe();
      }
    }



      // funcion sin usar onpush
      // this.taskService.updateTask(taskToUpdate).subscribe(updatedTask =>{
    //   console.log('tarea actualizada a travez del servicio', updatedTask);
      
    //   const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    //   if(index !== -1){
    //     this.tasks[index] = updatedTask;
    //   }
    // });
  }
  