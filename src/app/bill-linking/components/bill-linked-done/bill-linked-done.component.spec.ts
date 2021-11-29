import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillLinkedDoneComponent } from './bill-linked-done.component';

describe('BillLinkedDoneComponent', () => {
  let component: BillLinkedDoneComponent;
  let fixture: ComponentFixture<BillLinkedDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillLinkedDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillLinkedDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
