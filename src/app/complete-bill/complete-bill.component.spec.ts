import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteBillComponent } from './complete-bill.component';

describe('CompleteBillComponent', () => {
  let component: CompleteBillComponent;
  let fixture: ComponentFixture<CompleteBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
