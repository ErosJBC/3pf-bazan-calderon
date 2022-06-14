import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditStudentComponent } from './modal-edit-student.component';

describe('ModalEditStudentComponent', () => {
  let component: ModalEditStudentComponent;
  let fixture: ComponentFixture<ModalEditStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
