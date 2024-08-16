import { TestBed } from '@angular/core/testing';

import { SpyonServiceService } from './spyon-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('SpyonServiceService', () => {
  let service: SpyonServiceService;
  let logger = jasmine.createSpy('log');
  let status = jasmine.createSpyObj('service', ['name', 'age', 'email']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SpyonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar uma lista de usuarios', () => {
    const response = [
      { name: 'Danilo', age: 30, email: 'danilo@gmail.com' },
      { name: 'Maria', age: 25, email: 'maria@gmail.com' },
      { name: 'Jose', age: 40, email: 'jose@gmail.com' }
    ];

    spyOn(service, 'getUsers').and.returnValue(of(response));

    service.getUsers().subscribe(res => {
      expect(res).toEqual(response);
    });
  });

  it('Deve criar metodo com jasmine.createSpy', () => {
    logger('Loguei no sistema');

    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger).toHaveBeenCalledWith('Loguei no sistema')
  });

  it('Deve criar metodo com jasmine.createSpyObj', ()=> {
    status.name('Danilo');
    status.age('30');
    status.email('danilo@gmail.com');

    expect(status.name).toHaveBeenCalledTimes(1);
    expect(status.name).toHaveBeenCalledWith('Danilo');
    expect(status.age).toHaveBeenCalledTimes(1);
    expect(status.age).toHaveBeenCalledWith('30');
    expect(status.email).toHaveBeenCalledTimes(1);
    expect(status.email).toHaveBeenCalledWith('danilo@gmail.com');
  })
});
