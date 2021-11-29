import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { IntroComponent } from './intro/intro.component';
import { BillLinkingComponent } from './bill-linking/bill-linking.component';
import { CompleteBillComponent } from './complete-bill/complete-bill.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'verify',
    component: OtpComponent
  },
  {
    path: 'intro',
    component:IntroComponent
  },
  {
    path: 'bill-linking',
    component: BillLinkingComponent
  },
  {
    path: 'finish',
    component: CompleteBillComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },  
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
