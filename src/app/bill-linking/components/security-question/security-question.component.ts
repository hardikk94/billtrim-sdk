import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-security-question',
  templateUrl: './security-question.component.html',
  styleUrls: ['./security-question.component.scss']
})
export class SecurityQuestionComponent implements OnInit {
  @Output() goToNextStep = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  
  handle(next:string) {
    this.goToNextStep.emit(next)
  }
}
