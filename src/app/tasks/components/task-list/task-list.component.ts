import { Component, OnInit} from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    { id: 1, title: 'Configurar la arquitectura del proyecto', completed: true, description: 'Usar módulos y lazy loading.' },
    { id: 2, title: 'Crear componente de lista de tareas', completed: true, description: 'Este mismo componente.' },
    { id: 3, title: 'Añadir comunicación entre componentes', completed: false, description: 'Usar @Input y @Output.' },
    { id: 4, title: 'Implementar un servicio para las tareas', completed: false, description: 'Mover la lógica a un servicio inyectable.' }
  ];

  constructor() { }

  ngOnInit(): void { 
    console.log( 'TaskListComponent cargado', this.tasks );
    
  }
}
