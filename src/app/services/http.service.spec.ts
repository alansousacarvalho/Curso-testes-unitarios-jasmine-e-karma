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
    httpTestingController = TestBed.inject(HttpTestingController);
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

  it('Deve realizar uma chama GET para obter usuarios', () => {
    const response = [
      {
        "name": "Danilo 2",
        "email": "danilo@gmail.com",
        "age": "30",
        "id": "1"
      },
      {
        "id": "3",
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": "4",
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": "0.8230837961873159",
        "name": "Danilo ",
        "email": "danilo@gmail.com",
        "age": "30"
      }
    ]
    service.getUsers().subscribe(res => {
      expect(res).toBe(response);
    });
    const request = httpTestingController.expectOne(`${url}/users`)
    request.flush(response);
    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users`);
  });

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

  it('Deve atualizar o usuario com PUT', () => {
    const id = 0.8230837961873159;
    const usuario = {
      "name": "Ana",
      "email": "anna.mendes08@outlook.com",
      "age": "50",
      "id": "0.8230837961873159"
    }
    const response = {
      "name": "Ana",
      "email": "anna.mendes08@outlook.com",
      "age": "50",
      "id": "0.8230837961873159"
    }

    service.putUser(id, usuario).subscribe(res => {
      expect(res).toBe(response)
    });

    const request = httpTestingController.expectOne(`${url}/users/${id}`);
    expect(request.request.method).toBe('PUT');
    expect(request.request.url).toBe(`${url}/users/${id}`);

    request.flush(response)
  });

  it('Deve incluir um novo user ao fazer o POST', () => {
    //Payload enviado pelo formulário
    const user = {
      "name": "Alan",
      "email": "alan@outlook.com",
      "age": "25",
      "id": 0.15829535929003558
    }
    //Resposta retornada pela API
    const response = {
      "id": 0.15829535929003558,
      "name": "Alan",
      "email": "alan@outlook.com",
      "age": "25"
    }
    service.postUser(user).subscribe(res => {
      expect(res).toBe(response);
    });
    const request = httpTestingController.expectOne(`${url}/users`);
    request.flush(response)

    expect(request.request.method).toBe('POST');
    expect(request.request.url).toBe(`${url}/users`);
  });

  it('Deve excluir um usuario', () => {
    const id = 5;
    const response = {
      "id": "5",
      "name": "Ana",
      "email": "ana@outlook.com",
      "age": "18"
    };
    service.deleteUser(id).subscribe(res => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/users/${id}`);
    expect(request.request.method).toBe('DELETE');
    expect(request.request.url).toBe(`${url}/users/${id}`);

    request.flush(response);
  });

  it('Deve conter headers na requisição', () => {
    service.getUserWithHeaders().subscribe();
    const request = httpTestingController.expectOne(`${url}/users`);
    expect(request.request.headers.has('Content-type')).toEqual(true);
    expect(request.request.headers.has('Authorization')).toEqual(true);

  })
});
