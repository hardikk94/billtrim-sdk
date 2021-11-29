import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-verification-confirm',
  templateUrl: './verification-confirm.component.html',
  styleUrls: ['./verification-confirm.component.scss']
})
export class VerificationConfirmComponent implements OnInit {
  @Output() goToNextStep = new EventEmitter<string>();
  selectedRadio:any =''
  constructor() { }

  ngOnInit(): void {
  }

  radioClick(type:string) {
    if(type === 'verification-confirm-code') {
      this.selectedRadio = 'verification-confirm-code';
    } else {
      this.selectedRadio = 'verification-confirm-question';
    }
  }

  handle() {
    this.goToNextStep.emit(this.selectedRadio)
  }

}
