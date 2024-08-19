import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarUsuarioComponent } from './alterar-usuario.component';
import { provideHttpClient } from '@angular/common/http';

describe('AlterarUsuarioComponent', () => {
  let component: AlterarUsuarioComponent;
  let fixture: ComponentFixture<AlterarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlterarUsuarioComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
