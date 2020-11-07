import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsComponent } from './components/programs/programs.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'programs', component: ProgramsComponent },
      { path: 'tasks', component: TasksComponent },
      { path: '', redirectTo: 'programs', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModuleModule {}
