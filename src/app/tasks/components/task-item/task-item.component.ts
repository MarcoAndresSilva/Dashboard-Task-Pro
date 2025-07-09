import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TaskItemComponent implements OnInit {

  @Input() task: Task | undefined; // punto de entrada, El decorador @Input() convierte 'task' en una propiedad que se puede "rellenar" desde fuera.

  @Output() toggleComplete = new EventEmitter<Task>(); //creo un emisor de eventos. el Task es el tipo de dato que quiero emitir
  
  constructor() { }

  ngOnInit(): void { }

  onToggleComplete(): void {
    console.log('componente hijo emitiendo valor hacia componente padre', this.task);
    this.toggleComplete.emit(this.task);// usamos emit para emitir el valor y enviarlo hacia arriba
  }
}
