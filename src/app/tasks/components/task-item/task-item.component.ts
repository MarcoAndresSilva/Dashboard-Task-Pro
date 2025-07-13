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

  @Output() update = new EventEmitter<Task>(); //creo un emisor de eventos. el Task es el tipo de dato que quiero emitir
  @Output() delete = new EventEmitter<Task>();
  
  constructor() { }

  ngOnInit(): void { }

  onUpdateStatus(): void {
    console.log('Emitiendo evento UPDATE para la tarea', this.task);
    this.update.emit(this.task);// usamos emit para emitir el valor y enviarlo hacia arriba
  }

    onDelete(): void {
    console.log('Emitiendo evento DELETE para la tarea', this.task);
    this.delete.emit(this.task);// usamos emit para emitir el valor y enviarlo hacia arriba
  }
}
