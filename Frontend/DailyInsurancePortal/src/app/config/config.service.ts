import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claimmodel } from '../model/claimmodel';
import { Policymodel } from '../model/policymodel';
import { WalletModel } from '../model/walletmodel';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  //authorization-microservice url
  authserviceUrl = "http://localhost:8081/auth"
  //wallet-microservice url
   walletserviceUrl = "http://localhost:8081/wallet";

   //policy-microservice url
   policyserviceUrl = "http://localhost:8082/policy";

   //processclaim-microservice url
   claimserviceUrl = "http://localhost:8083/claim";

   //authentication token configuration
  //  private tokenStr=localStorage.getItem('token');
  //  private finalToken = 'Bearer ' + this.tokenStr;


  constructor(
    private http:HttpClient
  ) { }

  //---------------------------wallet-microservice calls-----------------------
  //add balance to wallet
  addWalletBalance(token:string,wallet:any){
    let options = {
      headers:{"Authorization":token}
    }
    return this.http.post<any>(this.walletserviceUrl+"/add-wallet-balance",wallet,options);
  }
  //get wallet all wallet transactions:
  getWallets(token:string){
    let options = {
      headers:{"Authorization":token}
    }
    return this.http.get<WalletModel[]>(this.walletserviceUrl+"/view-all-wallets",options);
  }
  //get total wallet balance
  getWalletBalance(token:string){
    let options = {
      headers:{"Authorization":token}
    }
    return this.http.get<number>(this.walletserviceUrl+"/total-balance",options);
  }
  //..........................Policy-microservice calls...........................
  //purchase a policy or create policy
  createPolicy(token:string,policy:any){
    let options = {
      headers:{"Authorization":token}
    }
    return this.http.post<any>(this.policyserviceUrl+"/purchase-policy",policy,options);
  }
//fetch all the available policies--transaction history
  getAllPolicies(token:string){
    let options = {
      headers:{"Authorization":token}
    }
    return this.http.get<Policymodel[]>(this.policyserviceUrl+"/view-policy",options);
  }

  //...............................process-claim_microservice calls.............................
  //for processing claim -- creating claim 
  createClaim(token:string,claim:any,id:number){
    let options = {
      headers:{"Authorization":token}
    }
    return this.http.put<any>(this.claimserviceUrl+`/update-claim/${id}`,claim,options);
  }

  //for fetching previous claim history
  getAllClaims(token:string){
    let options = {
      headers:{"Authorization":token}
    }
    return this.http.get<Claimmodel[]>(this.policyserviceUrl+"/view-claim",options);
  }
  //........................................





}
