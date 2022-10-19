import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PurchasePolicyComponent } from './purchase-policy/purchase-policy.component';
import { ProcessClaimComponent } from './process-claim/process-claim.component';
import { AddWalletBalanceComponent } from './add-wallet-balance/add-wallet-balance.component';
import { ViewWalletComponent } from './view-wallet/view-wallet.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
import { ViewClaimComponent } from './view-claim/view-claim.component';


// import { ViewPolicyComponent } from './view-wallet/view-policy/view-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PurchasePolicyComponent,
    ProcessClaimComponent,
    AddWalletBalanceComponent,
    ViewWalletComponent,
    ViewPolicyComponent,
    ViewClaimComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
