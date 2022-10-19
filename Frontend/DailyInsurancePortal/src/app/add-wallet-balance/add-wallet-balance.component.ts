import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';
import { WalletModel } from '../model/walletmodel';

@Component({
  selector: 'app-add-wallet-balance',
  templateUrl: './add-wallet-balance.component.html',
  styleUrls: ['./add-wallet-balance.component.css']
})
export class AddWalletBalanceComponent implements OnInit {

  public createWalletForm!:FormGroup;
  public error:string | undefined;
  public wallets!:WalletModel[];
  //private baseUrl = 'http://localhost:8081/wallet/test'
  private mode:string | undefined;
  public createWalletData:any= {
    mode:null,
    amount:null
  }

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private http:HttpClient,
    private apiService:ConfigService
  ) { }

  ngOnInit(): void {
    this.createWalletForm = this.formBuilder.group({
      amount:['',Validators.required],mode:['']
    });
  }
  
  onSelected(value:string){
    this.mode = value;
    console.log(this.mode);
  }
 
  onSubmit(){
    this.createWalletData.mode = this.createWalletForm.value.mode;
    this.createWalletData.amount = this.createWalletForm.value.amount;

    let jsonStr = JSON.stringify(this.createWalletData);
    let jsonObj = JSON.parse(jsonStr);
    console.log('json: ', jsonStr);
    console.log('formdata: ',this.createWalletForm.value)
    
    let tokenStr=localStorage.getItem('token');  

    console.log(tokenStr);      

    let finalToken = 'Bearer ' + tokenStr;

    this.apiService.addWalletBalance(finalToken,jsonObj).subscribe(
      (res) => {
        alert('balance added successfully');
        console.log(res);
        this.wallets = res;
        
      },
      (err) => {
        console.log('error: ', err);
        alert('Something went wrong');
      }

    )

      console.log(this.createWalletForm.value);
      

  
   }
   
  
   
}
