import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './components/task-list/task-list.component';

import { MaterialModule } from '../shared/material.module';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule,
    ReactiveFormsModule
    ]
})
export class TasksModule { }
