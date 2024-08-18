import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssincronoComponent } from './assincrono.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HttpService } from '../services/http.service';

fdescribe('AssincronoComponent', () => {
  let component: AssincronoComponent;
  let fixture: ComponentFixture<AssincronoComponent>;
  let http: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssincronoComponent],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AssincronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http = TestBed.inject(HttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Deve fazer request para o obter lista de usuarios', () => {
  //   const response = [
  //     {
  //       "name": "Danilo 2",
  //       "email": "danilo@gmail.com",
  //       "age": "30",
  //       "id": 1
  //     },
  //     {
  //       "id": 3,
  //       "name": "Joao",
  //       "email": "joao@gmail.com",
  //       "age": 22
  //     },
  //     {
  //       "id": 4,
  //       "name": "Joao",
  //       "email": "joao@gmail.com",
  //       "age": 22
  //     },
  //     {
  //       "id": 0.8230837961873159,
  //       "name": "Danilo ",
  //       "email": "danilo@gmail.com",
  //       "age": "30"
  //     }
  //   ];

  //   spyOn(http, 'getUsers').and.returnValue(of(response));

  //   expect(component.data).toEqual(response);
  // });

  it('Deve testar uma promisse', () => {
      const response = [
        {
          "name": "Danilo 2",
          "email": "danilo@gmail.com",
          "age": "30",
          "id": 1
        },
        {
          "id": 3,
          "name": "Joao",
          "email": "joao@gmail.com",
          "age": 22
        },
        {
          "id": 4,
          "name": "Joao",
          "email": "joao@gmail.com",
          "age": 22
        },
        {
          "id": 0.8230837961873159,
          "name": "Danilo ",
          "email": "danilo@gmail.com",
          "age": "30"
        }
      ];

      spyOn(http, 'getUsersWithPromise').and.returnValue(Promise.resolve(response));
  })
});
