import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';
import { Claimmodel } from '../model/claimmodel';

@Component({
  selector: 'app-process-claim',
  templateUrl: './process-claim.component.html',
  styleUrls: ['./process-claim.component.css']
})
export class ProcessClaimComponent implements OnInit {

  public createClaimForm!:FormGroup;
  public error:string | undefined;
  public claims!:Claimmodel[];
  public createClaimData:any = {
    policy_id:null,
    claim_dttm:null,
    claim_amount:null
  }

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private http:HttpClient,
    private apiService:ConfigService
  ) { }

  ngOnInit(): void {
    this.createClaimForm = this.formBuilder.group(
      {
        policy_id:['',Validators.required],
        claim_dttm:['',Validators.required],
        claim_amount:['',Validators.required]
      }
    )
  }

  // onSelected(value:string){
  //   this.mode = value;
  //   console.log(this.mode);
  // }
  onSubmit(){

    this.createClaimData.policy_id = this.createClaimForm.value.policy_id;
    this.createClaimData.claim_dttm = this.createClaimForm.value.claim_dttm;
    this.createClaimData.claim_amount = this.createClaimForm.value.claim_amount;

    let jsonStr = JSON.stringify(this.createClaimData);
    let jsonObj = JSON.parse(jsonStr);
    console.log('json: ', jsonStr);
    console.log('formdata: ',this.createClaimForm.value)
    
    let tokenStr=localStorage.getItem('token');  

    console.log(tokenStr);      

    let finalToken = 'Bearer ' + tokenStr;

    let id = 1;
    this.apiService.createClaim(finalToken,jsonObj,id).subscribe(
      (res) => {
        alert('claim raised successfully');
        console.log(res);
        this.claims = res;
        
      },
      (err) => {
        console.log('error: ', err);
        alert('Something went wrong please input correct data');
      }

    )

      console.log(this.createClaimForm.value);
      
   }
   
  }
