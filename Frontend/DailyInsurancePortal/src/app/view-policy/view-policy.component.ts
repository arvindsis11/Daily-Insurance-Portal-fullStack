import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Policymodel } from '../model/policymodel';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css']
})
export class ViewPolicyComponent implements OnInit {

  public error:string | undefined;
  public policies!:Policymodel[];
  public current_balance:number=0;
  constructor(
    private apiService:ConfigService
  ) { }

  ngOnInit(): void {
    let tokenStr=localStorage.getItem('token');  

    console.log(tokenStr);      

    let finalToken = 'Bearer ' + tokenStr;

    this.apiService.getAllPolicies(finalToken).subscribe(
     data=>{
            this.policies = data;
            console.log(this.policies.reduce((sum, current) => sum + current.policy_premium,0));
            this.current_balance = this.policies.reduce((sum, current) => sum + current.policy_premium,0);
          },(err) => {
            this.error = 'Something Went Wrong';
          }
    )
  }

}
