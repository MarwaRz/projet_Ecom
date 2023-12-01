import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReservationEmployeComponent } from './update-reservation-employe.component';

describe('UpdateReservationEmployeComponent', () => {
  let component: UpdateReservationEmployeComponent;
  let fixture: ComponentFixture<UpdateReservationEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReservationEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReservationEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
