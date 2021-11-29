import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.scss']
})
export class CredentialComponent implements OnInit {
  @Output() goToNextStep = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handle(next:string) {
    this.goToNextStep.emit(next)
  }

}
