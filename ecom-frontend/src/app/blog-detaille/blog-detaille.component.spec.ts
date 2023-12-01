import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailleComponent } from './blog-detaille.component';

describe('BlogDetailleComponent', () => {
  let component: BlogDetailleComponent;
  let fixture: ComponentFixture<BlogDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
