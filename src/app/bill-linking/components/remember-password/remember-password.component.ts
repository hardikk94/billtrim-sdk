import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.component.html',
  styleUrls: ['./remember-password.component.scss']
})
export class RememberPasswordComponent implements OnInit {
  @Output() goToNextStep = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handle(next:string) {
    this.goToNextStep.emit(next)
  }

}
