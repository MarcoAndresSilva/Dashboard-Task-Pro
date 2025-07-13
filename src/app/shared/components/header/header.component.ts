import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from '../../../tasks/components/task-form/task-form.component';
import { TaskService } from '../../../tasks/services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor (
    private dialog: MatDialog, 
    private taskService: TaskService, 
    private snackBar: MatSnackBar,  
  ) { }

  onAddTask() {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '450px',
      maxHeight: '80vh',
      panelClass: 'custom-dialog-container'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.addTask(result).subscribe({
          next: (newTask) => {
            console.log('Nueva tarea creada via API', newTask);
            this.snackBar.open(`Tarea "${newTask.todo}" creada correctamente`, 'Cerrar', {
              duration: 3000
            });
          },
          error: (error) => {
            console.error('Error al crear la tarea', error);
            this.snackBar.open('Error al crear la tarea', 'Cerrar', {
              duration: 5000,
              panelClass: ['error-snackbar']
            });
          }
        });
      } 
    });
  }

}
