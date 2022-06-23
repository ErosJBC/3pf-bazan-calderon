import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsComponent } from './students.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from '../../../services/students/students.service';
import { of } from 'rxjs';

describe('StudentsComponent', () => {
	let component: StudentsComponent;
	let fixture: ComponentFixture<StudentsComponent>;
	let studentsService: StudentsService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StudentsComponent],
			imports: [
				BrowserModule,
				HttpClientModule
			],
			providers: [StudentsService],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(StudentsComponent);
		component = fixture.componentInstance;
		studentsService = TestBed.inject(StudentsService);
		spyOn(studentsService, "getStudentsList").and.returnValue(
			of(
				[
					{
						id: 'xBIBvUVTYC8977t67V',
						codeStudent: '20154561G',
						firstLastname: 'BAZAN',
						secondLastname: 'CALDERON',
						names: 'EROS JEANPIERRE',
						cycle: '-',
						faculty: 'INGENIERIA INDUSTRIAL Y DE SISTEMAS',
						specialty: 'INGENIERIA DE SISTEMAS',
						condition: 'EGRESADO'
					}
				]
			)
		)
		component.ngOnInit();
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have dataStudents property filled when initialized', () => {
		expect(component.dataStudents.data.length > 0).toBeTruthy()
	})

	it('should call deleteStudent method in service when is executed deleteStudent method in Students component', () => {
		const deleteSpy = spyOn(studentsService, 'deleteStudent').and.returnValue(
			of(
				{
					id: 'xBIBvUVTYC8977t67V',
					codeStudent: '20154561G',
					firstLastname: 'BAZAN',
					secondLastname: 'CALDERON',
					names: 'EROS JEANPIERRE',
					cycle: '-',
					faculty: 'INGENIERIA INDUSTRIAL Y DE SISTEMAS',
					specialty: 'INGENIERIA DE SISTEMAS',
					condition: 'EGRESADO'
				}
			)
		)
		component.deleteStudent('xBIBvUVTYC8977t67V');
		expect(deleteSpy).toHaveBeenCalled()
	})

	it('should call updateStudent method in service when is executed editStudent method in Students component', () => {
		const updateSpy = spyOn(studentsService, 'updateStudent').and.returnValue(
			of(
				{
					id: 'xBIBvUVTYC8977t67V',
					codeStudent: '20154561G',
					firstLastname: 'BAZAN',
					secondLastname: 'CALDERON',
					names: 'EROS JEANPIERRE',
					cycle: '-',
					faculty: 'INGENIERIA INDUSTRIAL Y DE SISTEMAS',
					specialty: 'INGENIERIA DE SISTEMAS',
					condition: 'EGRESADO'
				}
			)
		)
		component.editStudent('xBIBvUVTYC8977t67V')
		expect(updateSpy).toHaveBeenCalled()
	})

	it('should call getStudent method in service when is executed seeStudent method in Students component', () => {
		const seeSpy = spyOn(studentsService, 'getStudent').and.returnValue(
			of(
				{
					id: 'xBIBvUVTYC8977t67V',
					codeStudent: '20154561G',
					firstLastname: 'BAZAN',
					secondLastname: 'CALDERON',
					names: 'EROS JEANPIERRE',
					cycle: '-',
					faculty: 'INGENIERIA INDUSTRIAL Y DE SISTEMAS',
					specialty: 'INGENIERIA DE SISTEMAS',
					condition: 'EGRESADO'
				}
			)
		)
		component.seeStudent('xBIBvUVTYC8977t67V')
		expect(seeSpy).toHaveBeenCalled()
	})
});
