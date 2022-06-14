import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule) },
  { path: 'panel',
    component: MainComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/panel/panel.module').then((m) => m.PanelModule) },
      { path: '**', redirectTo: '/panel/dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
