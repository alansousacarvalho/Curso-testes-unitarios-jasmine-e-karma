import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginComponent } from './form-login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { HttpService } from '../services/http.service';

describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;
  let fb: FormBuilder;
  let service: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormLoginComponent],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fb = TestBed.inject(FormBuilder);
    service = TestBed.inject(HttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve validar se o formulario é invalido', () => {
    const result = component.isValidForm();

    expect(result).toBe(false);
  });

  it('Deve validar se o formulario é valido', () => {
    component.form.get('email')?.setValue('alan@outlook.com');
    component.form.get('password')?.setValue('senha123');
    const result = component.isValidForm();

    expect(result).toBeTrue();
  });

  it("Deve estar desabilitado o botao quando o formulario for invalido", () => {
    const button = fixture.debugElement.nativeElement.querySelector('#fazer-login');

    expect(button.disabled).toBeTrue();
  });

  it('Deve estar habilitado o botao quando preencher o formulario', () => {
    component.form.get('email')?.setValue('alan@outlook.com');
    component.form.get('password')?.setValue('123456');

    const button = fixture.debugElement.nativeElement.querySelector('#fazer-login');
    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
  });

  it('Deve retornar o valor de um control do form', () => {
    component.form = fb.group({
      email: 'alan@outlook.com',
      password: '123456'
    });

    expect(component.getValueControl(component.form, 'password')).toEqual('123456')
  });

  it('Deve criar um payload para enviar para a API', () => {
    const payload = {
      email: 'alan@outlook.com',
      password: '123456'
    }

    expect(component.createPayload('alan@outlook.com', '123456')).toEqual(payload);
  });

  it('Deve realizar login', () => {
    component.form = fb.group({
      id: "fd66",
      email: 'alan@outlook.com',
      password: '123456'
    });
    const response = {
      "id": "fd66",
      "email": "alan@outlook.com",
      "password": "123456"
    }
    let spied = spyOn(service, 'login').and.returnValue(of(response));

    component.isValidForm();
    component.login();

    expect(spied).toHaveBeenCalledTimes(1);
  });
});
