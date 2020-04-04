import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./componentPackage/dashboard/dashboard.component"
import { LoginComponent } from "./componentPackage/login/login.component"
import { FullComponent } from "./layout/full/full.component"
import { BlankComponent } from "./layout/blank/blank.component"
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: 'ads', component: DashboardComponent },
     
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]

  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
