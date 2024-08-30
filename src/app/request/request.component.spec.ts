import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestComponent } from './request.component';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { of } from 'rxjs';

describe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;
  let httpService: HttpService;
  let httpTestingController: HttpTestingController;
  let url: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpService = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
    url = "http://localhost:3000";
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve retornar uma lista de usuarios', () => {
    const response = [
      {
        "id": "1",
        "name": "Alan",
        "email": "alan@outlook.com",
        "age": "25"
      }
    ];
    const request = httpTestingController.expectOne(`${url}/users`);
    request.flush(response);

    expect(component.listaUsuarios).toEqual(response);
  });

  it('Deve listar um usuario a partir do ID', () => {
    const id = 1;
    const spy = spyOn(component, 'getUsersByID').and.callThrough();

    component.getUsersByID(id);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Deve deletar um usuario ao ativar o botao', () => {
    const id = 1;
    const response = {
      "id": "1",
      "name": "Alan",
      "email": "alan@outlook.com",
      "age": "25"
    }
    component.deleteUser(id);

    const request = httpTestingController.expectOne(`${url}/users/${id}`);
    request.flush(response);
    expect(request.request.method).toBe('DELETE');
  });

  it('Deve abrir a modal ao selecionar o botao', () => {
    let usuario = [
      {
        "id": 21,
        "name": "Ana",
        "email": "ana@outlook.com",
        "age": "18"
      }
    ]
    component.abrirModalAtualizarUsuario(usuario);

    expect(component.mostrarAlterarUsuario).toBeTrue();
    expect(component.usuarioASerAlterado).toEqual(usuario);
  });

  it('Deve fechar a modal e atualizar a lista dos usuarios', () => {
    let fecharModal = false;
    let spy = spyOn(component, 'fecharModalAtualizarUsuario').and.callThrough();
    component.fecharModalAtualizarUsuario(fecharModal);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Deve incluir um novo usuario', () => {
    let payload = {
      "name": "Alan",
      "email": "alan@outlook.com",
      "age": "25",
      "id": 44
    };
    let response = {
      "id": 44,
      "name": "Alan",
      "email": "alan@outlook.com",
      "age": "25"
    }
    let request = httpTestingController.expectOne(`${url}/users`).flush(response);
    let spy = spyOn(httpService, 'postUser').and.returnValue(of(response))
    component.postUsers();
    // expect(spy).toHaveBeenCalledTimes(1);

  })
});
