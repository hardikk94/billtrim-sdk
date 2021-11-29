import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-complete-bill',
  templateUrl: './complete-bill.component.html',
  styleUrls: ['./complete-bill.component.scss']
})
export class CompleteBillComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToNextPage() {
    this.router.navigate(['/dashboard'])
  }
}
