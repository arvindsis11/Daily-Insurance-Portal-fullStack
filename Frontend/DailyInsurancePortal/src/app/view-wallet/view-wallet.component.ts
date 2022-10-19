import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { WalletModel } from '../model/walletmodel';

@Component({
  selector: 'app-view-wallet',
  templateUrl: './view-wallet.component.html',
  styleUrls: ['./view-wallet.component.css']
})
export class ViewWalletComponent implements OnInit {

  public error:string | undefined;
  public wallets!:WalletModel[];
  public current_balance:number=0;
  

  constructor(
    private apiService:ConfigService
  ) { }

  ngOnInit(): void {
    let tokenStr=localStorage.getItem('token');  

     console.log(tokenStr);      

     let finalToken = 'Bearer ' + tokenStr;

     this.apiService.getWallets(finalToken).subscribe(
      data=>{
             this.wallets = data;
             //console.log(this.wallets.reduce((sum, current) => sum + current.amount,0));
             //this.current_balance = this.wallets.reduce((sum, current) => sum + current.amount,0);
           }
     )
     this.apiService.getWalletBalance(finalToken).subscribe(
      data=>{
        this.current_balance = data;
      }
     )
     
     
  }
  
  
}
