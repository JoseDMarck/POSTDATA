import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P01HomeComponent } from './p01-home.component';

describe('P01HomeComponent', () => {
  let component: P01HomeComponent;
  let fixture: ComponentFixture<P01HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P01HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P01HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
