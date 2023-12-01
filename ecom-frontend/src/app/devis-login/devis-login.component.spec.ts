import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisLoginComponent } from './devis-login.component';

describe('DevisLoginComponent', () => {
  let component: DevisLoginComponent;
  let fixture: ComponentFixture<DevisLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
