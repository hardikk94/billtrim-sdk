import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  isBenifitsVisible:boolean = false
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleBenifits() {
    this.isBenifitsVisible =!this.isBenifitsVisible;
  }


  getStarted() {
    this.router.navigate(['/bill-linking'])
  }
}
