import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillLinkingComponent } from './bill-linking.component';

describe('BillLinkingComponent', () => {
  let component: BillLinkingComponent;
  let fixture: ComponentFixture<BillLinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillLinkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillLinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
