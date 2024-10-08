import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { GuardGuard } from './guard.guard';

describe('GuardGuard', () => {
  let guard: GuardGuard;
  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: '/login' };
  let routerMock = { navigate: jasmine.createSpy('navigate') }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Router, 
          useValue: routerMock
        }
      ]
    });
    guard = TestBed.inject(GuardGuard);
    localStorage.removeItem('token')
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('Deve redirecionar usuario para pagina de login quando nao tiver token', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('Deve conceder acesso quando usuario tiver token', () => {
    const token = 'asasaskopakopsaopks';
    localStorage.setItem('token', token);
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  });
});