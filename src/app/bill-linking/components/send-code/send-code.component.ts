import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-send-code',
  templateUrl: './send-code.component.html',
  styleUrls: ['./send-code.component.scss']
})
export class SendCodeComponent implements OnInit {
  @Output() goToNextStep = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handle(next:string) {
    this.goToNextStep.emit(next)
  }
}
