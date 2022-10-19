import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';
import { Policymodel } from '../model/policymodel';

@Component({
  selector: 'app-purchase-policy',
  templateUrl: './purchase-policy.component.html',
  styleUrls: ['./purchase-policy.component.css']
})
export class PurchasePolicyComponent implements OnInit {

  public createPolicyForm!:FormGroup;
  public error:string|undefined;
  public policy!:Policymodel[];
  public premium!:number;

  public createPolicyData:any= {
    policy_name:null,
    policy_premium:null
  }


  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private http:HttpClient,
    private apiService:ConfigService
  ) { }

  ngOnInit(): void {
    this.createPolicyForm = this.formBuilder.group({
      policy_premium:['',Validators.required],
      policy_name:['',Validators.required]

    })
  }
  //for testing!
  onSelected(value:number){
    this.premium = value;
    console.log(this.premium);
  }
  onSubmit(){
    this.createPolicyData.policy_name = this.createPolicyForm.value.policy_name;
    this.createPolicyData.policy_premium = this.createPolicyForm.value.policy_premium;

    let jsonStr = JSON.stringify(this.createPolicyData);
    let jsonObj = JSON.parse(jsonStr);
    console.log('json: ', jsonStr);
    console.log('formdata: ',this.createPolicyForm.value)
    
    let tokenStr=localStorage.getItem('token');  

    console.log(tokenStr);      

    let finalToken = 'Bearer ' + tokenStr;

    this.apiService.createPolicy(finalToken,jsonObj).subscribe(
      (res) => {
        alert('balance added successfully');
        console.log(res);
        this.policy = res;
        
      },
      (err) => {
        console.log('error: ', err);
        alert('Something went wrong');
      }

    )

      console.log(this.createPolicyForm.value);
      

  
   }

}
