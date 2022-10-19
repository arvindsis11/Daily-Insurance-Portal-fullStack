import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWalletBalanceComponent } from './add-wallet-balance/add-wallet-balance.component';
import { AuthGuardService } from './config/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProcessClaimComponent } from './process-claim/process-claim.component';
import { PurchasePolicyComponent } from './purchase-policy/purchase-policy.component';
import { SignupComponent } from './signup/signup.component';
import { ViewClaimComponent } from './view-claim/view-claim.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
import { ViewWalletComponent } from './view-wallet/view-wallet.component';

const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},//canActivate,RoutGuard service
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'addWalletBalance', component: AddWalletBalanceComponent,canActivate:[AuthGuardService]},
  {path: 'purchasePolicy', component: PurchasePolicyComponent,canActivate:[AuthGuardService]},
  {path: 'processClaim', component: ProcessClaimComponent,canActivate:[AuthGuardService]},
  {path: 'viewWallet', component: ViewWalletComponent,canActivate:[AuthGuardService]},
  {path: 'viewPolicy', component: ViewPolicyComponent,canActivate:[AuthGuardService]},
  {path: 'viewClaim',component:ViewClaimComponent,canActivate:[AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
