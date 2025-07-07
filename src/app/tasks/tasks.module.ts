import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './components/task-list/task-list.component';


@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ]
})
export class TasksModule { }
