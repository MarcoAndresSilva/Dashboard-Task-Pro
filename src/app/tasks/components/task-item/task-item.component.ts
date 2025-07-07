import { Component, Input, OnInit, output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task | undefined;

  constructor() { }

  ngOnInit(): void { 
    console.log( 'TaskListComponent cargado', this.task );
  }
}
