import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) }, 
  { path: 'stats', loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
