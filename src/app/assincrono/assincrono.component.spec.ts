import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssincronoComponent } from './assincrono.component';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HttpService } from '../services/http.service';
import { provideHttpClient } from '@angular/common/http';

describe('AssincronoComponent', () => {
  let component: AssincronoComponent;
  let fixture: ComponentFixture<AssincronoComponent>;
  let http: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssincronoComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
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

  it('Deve fazer request para o obter lista de usuarios', () => {
    const response = [
      {
        "id": "1",
        "name": "Alan",
        "email": "alan@outlook.com",
        "age": "25"
      }
    ];

    spyOn(http, "getUsers").and.returnValue(of(response));
    component.getUsers();

    expect(component.data).toEqual(response);
  });

  it('Deve testar uma promise', async() => {
    const response = [
      {
        "id": "1",
        "name": "Alan",
        "email": "alan@outlook.com",
        "age": "25"
      }
    ];

    spyOn(http, 'getUsersWithPromise').and.returnValue(Promise.resolve(response));

    await component.getUsersWithPromise();

    expect(component.dataPromise).toEqual(response);

  })
});
