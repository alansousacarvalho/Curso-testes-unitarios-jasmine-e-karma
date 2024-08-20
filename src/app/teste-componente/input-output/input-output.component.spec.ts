import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputComponent } from './input-output.component';
import { By } from '@angular/platform-browser';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputOutputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve receber usuario pelo Input', () => {
    const usuario = {
      id: "1",
      name: "Alan",
      email: "alan@outlook.com",
      age: "25"
    };
    component.usuario = usuario;
    expect(component.usuario).toBe(usuario);
  });

  it('Deve enviar um emit pelo Output', () => {
    const emitMessageSpy = spyOn(component.mensagemUsuario, 'emit');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(emitMessageSpy).toHaveBeenCalled();
  });
});
