import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfostudentComponent } from './infostudent.component';

describe('InfostudentComponent', () => {
  let component: InfostudentComponent;
  let fixture: ComponentFixture<InfostudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfostudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
