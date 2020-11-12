import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './components/programs/programs.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HomeRoutingModuleModule } from './home-routing-module.module';
import { HomeComponent } from './home.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MenuFoldOutline, MenuUnfoldOutline, UserOutline, TeamOutline } from '@ant-design/icons-angular/icons';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddProgramModalComponent } from './components/programs/components/add-program.modal/add-program-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [HomeComponent, ProgramsComponent, TasksComponent, AddProgramModalComponent],
  imports: [
    CommonModule,
    HomeRoutingModuleModule,
    NzTableModule,
    NzLayoutModule,
    DragDropModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    NzIconModule.forChild([MenuFoldOutline, MenuUnfoldOutline, UserOutline, TeamOutline]),
    NzButtonModule,
    NzModalModule,
  ],
})
export class HomeModule {}
