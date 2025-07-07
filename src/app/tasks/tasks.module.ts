import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './components/task-list/task-list.component';

import { MaterialModule } from '../shared/material.module';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule
    ]
})
export class TasksModule { }
