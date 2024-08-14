import { TestBed } from '@angular/core/testing';

import { MyServiceService } from './my-service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MyServiceMock extends MyServiceService {
  response = [
    {
      name: 'Alan',
      age: 25,
      email: 'alan@gmail.com',
      id: 1
    },
    {
      name: 'Ana',
      age: 18,
      email: 'ana@gmail.com',
      id: 2
    },
  ]

  override getUsers() {
    return of(this.response);
  }
}

describe('MyServiceService', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: MyServiceService,
          useClass: MyServiceMock
        }
      ]
    });
    service = TestBed.inject(MyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve chamar uma request HTTP', () => {
    const response = [
      {
        name: 'Alan',
        age: 25,
        email: 'alan@gmail.com',
        id: 1
      },
      {
        name: 'Ana',
        age: 18,
        email: 'ana@gmail.com',
        id: 2
      },
    ]

    service.getUsers().subscribe(res => {
      expect(res).toEqual(response);
    });
  });
});
