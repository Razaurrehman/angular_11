import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { icon: 'dashboard', text: 'Dashboard' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
