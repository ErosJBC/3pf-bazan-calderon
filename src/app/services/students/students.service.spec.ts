import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { StudentsService } from './students.service';

describe('StudentsService', () => {
	let service: StudentsService;
	let mockResponseStudents = [
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
	];
	let httpController: HttpTestingController;
	let URL: string = 'https://us-central1-students-api-100.cloudfunctions.net/app/api/v1/students';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		});
		service = TestBed.inject(StudentsService);
		httpController = TestBed.inject(HttpTestingController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should call getStudentsList method', () => {
		service.getStudentsList().subscribe((res) => {
			expect(res).toEqual(mockResponseStudents)
		});

		const req = httpController.expectOne({
			method: 'GET',
			url: `${URL}`
    	});

		req.flush(mockResponseStudents);
	})

	it('should do delete request with deleteStudent method', () => {
		service.deleteStudent('xBIBvUVTYC8977t67V').subscribe((res) => {
			expect(res).toEqual(mockResponseStudents[0])
		});
		
		const req = httpController.expectOne({
			method: 'DELETE',
			url: `${URL}/xBIBvUVTYC8977t67V`
		});

		req.flush(mockResponseStudents[0]);
	})

	it('should to put request with updateStudent method', () => {
		mockResponseStudents[0].condition = 'ALUMNO REGULAR';
		mockResponseStudents[0].cycle = '10mo';
		mockResponseStudents[0].specialty = 'INGENIERÍA INDUSTRIAL';
		service.updateStudent(mockResponseStudents[0], 'xBIBvUVTYC8977t67D').subscribe((res) => {
			expect(res).toEqual(mockResponseStudents[0])
		});
		
		const req = httpController.expectOne({
			method: 'PUT',
			url: `${URL}/xBIBvUVTYC8977t67D`
		});

		req.flush(mockResponseStudents[0]);
	})
});
