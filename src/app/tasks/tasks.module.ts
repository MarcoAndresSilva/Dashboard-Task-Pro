import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './components/task-list/task-list.component';

import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule
    ]
})
export class TasksModule { }
