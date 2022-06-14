import { NgModule } from '@angular/core';

import { ComponentModule } from '../../components/components.module';
import { PanelRoutingModule } from './panel-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { InfostudentComponent } from './students/infostudent/infostudent.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RegisterComponent,
    CoursesComponent,
    StudentsComponent,
    InfostudentComponent
  ],
  imports: [
    ComponentModule,
    PanelRoutingModule
  ],
  providers: [],
  bootstrap: [PanelModule]
})

export class PanelModule { }