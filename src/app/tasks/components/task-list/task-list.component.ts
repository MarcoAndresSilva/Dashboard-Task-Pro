import { Component, OnInit} from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})

export class TaskListComponent implements OnInit {
  tasks: Task[] = []; // array vacio que se llenara con el servicio

  constructor(private taskService: TaskService) { } // inyectamos el servicio

  ngOnInit(): void { 
    console.log( 'TaskListComponent cargado', this.tasks );
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasksFromService => {
      console.log('tareas recibidas desde el servicio', tasksFromService);
      
      this.tasks = tasksFromService;
    });
  }

  
  handleToggleComplete(taskToUpdate: Task): void {
    this.taskService.updateTask(taskToUpdate).subscribe(updatedTask =>{
      console.log('tarea actualizada a travez del servicio', updatedTask);
      
      const index = this.tasks.findIndex(t => t.id === updatedTask.id);
      if(index !== -1){
        this.tasks[index] = updatedTask;
      }
    });

  }
  
}
