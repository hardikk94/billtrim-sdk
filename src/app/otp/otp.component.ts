import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  phoneOTP :any = null;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  resendOTP(){

  }

  otpChange(e:any){
    let str = e.target.value    
    if(str.length > 3)
    this.router.navigate(['/intro'])
  }

  goToNext(){
    this.router.navigate(['/intro'])
  }

}
