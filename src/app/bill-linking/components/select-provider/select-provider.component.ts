import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-select-provider',
  templateUrl: './select-provider.component.html',
  styleUrls: ['./select-provider.component.scss']
})
export class SelectProviderComponent implements OnInit {
  @Input() providerList :any = [];
  @Input() billName :string ='';
  
  @Output() goToNextStep = new EventEmitter<string>();
  constructor() {    
  }

  ngOnInit(): void {}

  handle(next:string) {
    this.goToNextStep.emit(next)
  }

}
