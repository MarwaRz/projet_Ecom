import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationEmployeComponent } from './reservation-employe.component';

describe('ReservationEmployeComponent', () => {
  let component: ReservationEmployeComponent;
  let fixture: ComponentFixture<ReservationEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
