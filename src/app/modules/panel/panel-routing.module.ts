import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notes', component: RegisterComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'courses', component: CoursesComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }