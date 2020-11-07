import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './components/programs/programs.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HomeRoutingModuleModule } from './home-routing-module.module';
import { HomeComponent } from './home.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MenuFoldOutline, MenuUnfoldOutline, UserOutline, TeamOutline } from '@ant-design/icons-angular/icons';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [HomeComponent, ProgramsComponent, TasksComponent],
  imports: [
    CommonModule,
    HomeRoutingModuleModule,
    NzTableModule,
    NzLayoutModule,
    DragDropModule,
    NzIconModule.forChild([MenuFoldOutline, MenuUnfoldOutline, UserOutline, TeamOutline]),
  ],
})
export class HomeModule {}
