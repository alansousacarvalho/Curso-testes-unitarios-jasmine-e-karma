import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('HttpService', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;
  let url: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController)
    url = 'http://localhost:3000';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizar chamada GET por ID', () => {
    const id = 3;
    const response = {
      name: 'danilo',
      age: 30,
      email: 'danilo@gmail.com'
    } 

    service.getUsersById(id).subscribe(res => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/users/${id}`);

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users/${id}`);
    request.flush(response)
  })
});
