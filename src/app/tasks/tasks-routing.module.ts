import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)], // se usa forchild para que las rutas sean hijas o en modulos lazy hijos
  exports: [RouterModule]
})
export class TasksRoutingModule { }
