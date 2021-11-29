import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { IntroComponent } from './intro/intro.component';
import { BillLinkingComponent } from './bill-linking/bill-linking.component';
import { CompleteBillComponent } from './complete-bill/complete-bill.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectProviderComponent } from './bill-linking/components/select-provider/select-provider.component';
import { RememberPasswordComponent } from './bill-linking/components/remember-password/remember-password.component';
import { CredentialComponent } from './bill-linking/components/credential/credential.component';
import { VerificationConfirmComponent } from './bill-linking/components/verification-confirm/verification-confirm.component';
import { SendCodeComponent } from './bill-linking/components/send-code/send-code.component';
import { SecurityQuestionComponent } from './bill-linking/components/security-question/security-question.component';
import { BillLinkedDoneComponent } from './bill-linking/components/bill-linked-done/bill-linked-done.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtpComponent,
    IntroComponent,
    BillLinkingComponent,
    CompleteBillComponent,
    DashboardComponent,
    SelectProviderComponent,
    RememberPasswordComponent,
    CredentialComponent,
    VerificationConfirmComponent,
    SendCodeComponent,
    SecurityQuestionComponent,
    BillLinkedDoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    SelectProviderComponent,
    RememberPasswordComponent,
    CredentialComponent,
    VerificationConfirmComponent,
    SendCodeComponent,
    SecurityQuestionComponent,
    BillLinkedDoneComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
