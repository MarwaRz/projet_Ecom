import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlog2Component } from './add-blog2.component';

describe('AddBlog2Component', () => {
  let component: AddBlog2Component;
  let fixture: ComponentFixture<AddBlog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlog2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
