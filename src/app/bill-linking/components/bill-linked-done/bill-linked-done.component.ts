import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bill-linked-done',
  templateUrl: './bill-linked-done.component.html',
  styleUrls: ['./bill-linked-done.component.scss']
})
export class BillLinkedDoneComponent implements OnInit {
  @Output() goToNextStep = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handle(next:string) {
    this.goToNextStep.emit(next)
  }


}
