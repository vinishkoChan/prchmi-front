import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  DeleteOutline,
  EyeOutline,
  EditOutline,
  PlusOutline,
} from '@ant-design/icons-angular/icons';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ProgramComponent } from './pages/program/program.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AppComponent, AuthComponent, HomeComponent, ProgramComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzMenuModule,
    NzInputModule,
    ReactiveFormsModule,
    NzTableModule,
    NzDividerModule,
    DragDropModule,
    NzIconModule.forChild([
      DeleteOutline,
      EyeOutline,
      EditOutline,
      PlusOutline,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
