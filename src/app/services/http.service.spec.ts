import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HttpService', () => {
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
      "id": "3",
      "name": "Joao",
      "email": "joao@gmail.com",
      "age": 22
    }

    service.getUsersById(id).subscribe(res => {
      expect(res).toBe(response)
    });

    const request = httpTestingController.expectOne(`${url}/users/${id}`);

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users/${id}`);

    request.flush(response);
  });

  // it('Deve realizar uma chama GET para obter usuarios', () => {
  //   service.getUsers().subscribe();
  //   const request = httpTestingController.expectOne(`${url}/users`)
  //   request.flush({});
  //   expect(request.request.method).toBe('GET');
  //   expect(request.request.url).toBe(`${url}/users`);
  // });

  it('Deve gerar erro ao obter usuarios', () => {
    service.getUsers().subscribe({
      error: err => {
        expect(err).toBe(500);
      }
    });
    const request = httpTestingController.expectOne(`${url}/users`);
    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users`);
    request.flush({
      status: 500,
      statusText: 'Erro na rede'
    });
  })

  it('Deve fazer req. POST para cadastrar usuario', () => {
    const user = {};
    const response = {};

    service.postUser(user).subscribe(res => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/users`);
    expect(request.request.method).toBe('POST');
    expect(request.request.url).toBe(`${url}/users`);
    request.flush(response)
  })

  it('Deve conter headers na requisição', () => {
    service.getUserWithHeaders().subscribe();
    const request = httpTestingController.expectOne(`${url}/users`);
    expect(request.request.headers.has('Content-type')).toEqual(true);
    expect(request.request.headers.has('Authorization')).toEqual(true);

  })
});
