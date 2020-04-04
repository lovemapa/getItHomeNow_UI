import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./componentPackage/dashboard/dashboard.component"
import { LoginComponent } from "./componentPackage/login/login.component"
import { FullComponent } from "./layout/full/full.component"
import { BlankComponent } from "./layout/blank/blank.component"
import { AddAddsComponent } from "./componentPackage/add-adds/add-adds.component"
import { ProfileSettingChangeComponent } from "./componentPackage/profile-setting-change/profile-setting-change.component"
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: 'advertisment', component: DashboardComponent },
      { path: 'add/advertisment', component: AddAddsComponent },
      { path: 'settings', component: ProfileSettingChangeComponent },

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
