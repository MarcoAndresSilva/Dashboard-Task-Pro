import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from '../../../tasks/components/task-form/task-form.component';
import { TaskService } from '../../../tasks/services/task.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor (private dialog: MatDialog, private taskService: TaskService ) { }

  onAddTask() {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '450px',
      maxHeight: '80vh',
      panelClass: 'custom-dialog-container'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog was closed with result:', result);
        this.taskService.addTask(result);
      }
    });
  }

}
