import { Component, OnInit,Input } from '@angular/core';
import { AppService } from '../app.service'
@Component({
  selector: 'app-bill-linking',
  templateUrl: './bill-linking.component.html',
  styleUrls: ['./bill-linking.component.scss']
})
export class BillLinkingComponent implements OnInit {  
  providerList :any = []
  currentStep:string = 'select-provider';
  selected:any = null;
  billName:string=''
  constructor(public appService:AppService) {
    this.selected = this.appService?.bills.find((bill:any )=> bill?.open);   
    this.providerList = this.appService?.providers[this.selected?.type];    
    this.billName = this.selected.type;
   }

  handleSteps(steps:any) {
    switch(steps) {
      case 'select-provider' : {
        this.currentStep = 'remember-password';
        break;
      }
      case 'remember-password' : {
        this.currentStep = 'credential';
        break;
      }
      case 'credential' : {
        this.currentStep = 'verification-confirm';
        break;
      }
      case 'verification-confirm-code':
      case 'verification-confirm-question' : {
        this.currentStep = steps;        
        break;
      }  
      case 'verification-confirm' : {
        this.currentStep = 'bill-linked';        
        break;
      }  
      case 'next-bill':{        
        if(this.selected ) {      
          this.appService.updateBill(this.selected );          
          this.selected = this.appService?.bills.find((bill:any )=> bill?.open)
          this.currentStep = 'select-provider'; 
          if(this.selected) {
            this.billName = this.selected.type;  
          }          
        }        
        break;
      }
      default : {
        this.currentStep = 'select-provider';
        break;
      }
    }    
   }
  ngOnInit(): void {
  }

}
