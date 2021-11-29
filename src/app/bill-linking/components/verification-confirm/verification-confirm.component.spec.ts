import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationConfirmComponent } from './verification-confirm.component';

describe('VerificationConfirmComponent', () => {
  let component: VerificationConfirmComponent;
  let fixture: ComponentFixture<VerificationConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
