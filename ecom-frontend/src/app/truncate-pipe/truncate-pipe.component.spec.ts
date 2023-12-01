import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncatePipeComponent } from './truncate-pipe.component';

describe('TruncatePipeComponent', () => {
  let component: TruncatePipeComponent;
  let fixture: ComponentFixture<TruncatePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruncatePipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruncatePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
