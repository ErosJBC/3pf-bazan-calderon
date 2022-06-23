import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
	let service: CoursesService;
	let mockResponseCourse = [
		{
			id: 'xBIBvUVTYC8977t67D',
			codeCourse: 'BM203',
			nameCourse: 'GEOMETRÍA ANALÍTICA',
			credits: '3',
			typeEvaluation: 'G',
			sectionTotal: '3',
			vacantTotal: '30'
		}
	];
	let httpController: HttpTestingController;
	let URL: string = 'https://us-central1-students-api-100.cloudfunctions.net/app/api/v1/courses';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		});
		service = TestBed.inject(CoursesService);
		httpController = TestBed.inject(HttpTestingController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should call getStudentsList method', () => {
		service.getCoursesList().subscribe((res) => {
			expect(res).toEqual(mockResponseCourse)
		});

		const req = httpController.expectOne({
			method: 'GET',
			url: `${URL}`
    	});

		req.flush(mockResponseCourse);
	})

	it('should do delete request with deleteStudent method', () => {
		service.deleteCourse('xBIBvUVTYC8977t67V').subscribe((res) => {
			expect(res).toEqual(mockResponseCourse[0])
		});
		
		const req = httpController.expectOne({
			method: 'DELETE',
			url: `${URL}/xBIBvUVTYC8977t67D`
		});

		req.flush(mockResponseCourse[0]);
	})

	it('should to put request with updateCourse method', () => {
		mockResponseCourse[0].credits = '4';
		mockResponseCourse[0].sectionTotal = '4';
		mockResponseCourse[0].typeEvaluation = 'F';
		service.updateCourse(mockResponseCourse[0], 'xBIBvUVTYC8977t67D').subscribe((res) => {
			expect(res).toEqual(mockResponseCourse[0])
		});
		
		const req = httpController.expectOne({
			method: 'PUT',
			url: `${URL}/xBIBvUVTYC8977t67D`
		});

		req.flush(mockResponseCourse[0]);
	})
});
