import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Claimmodel } from '../model/claimmodel';

@Component({
  selector: 'app-view-claim',
  templateUrl: './view-claim.component.html',
  styleUrls: ['./view-claim.component.css']
})
export class ViewClaimComponent implements OnInit {

  public error:string | undefined;
  public claims!:Claimmodel[];
  public current_balance:number=0; 
  constructor(
    private apiService:ConfigService
  ) { }

  ngOnInit(): void {
    let tokenStr=localStorage.getItem('token');  

    console.log(tokenStr);      

    let finalToken = 'Bearer ' + tokenStr;

    this.apiService.getAllClaims(finalToken).subscribe(
     data=>{
            this.claims = data
            console.log(this.claims.reduce((sum, current) => sum + current.claim_amount,0));
            this.current_balance = this.claims.reduce((sum, current) => sum + current.claim_amount,0);
          },(err) => {
            this.error = 'Something Went Wrong';
          }
    )
  }
  }
