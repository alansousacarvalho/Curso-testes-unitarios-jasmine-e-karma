import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { TesteComponenteComponent } from './teste-componente.component';
import { By } from '@angular/platform-browser';

describe('TesteComponenteComponent', () => {
  let component: TesteComponenteComponent;
  let fixture: ComponentFixture<TesteComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TesteComponenteComponent],
      providers: [
        {
          provide: ComponentFixtureAutoDetect,
          useValue: true
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TesteComponenteComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve acessar um elemento na DOM com debugElement.query()', () => {
    let title = fixture.debugElement.query(By.css('h2')).nativeElement;

    expect(title.textContent).toBe('Teste com DebugElement.query()');
  });

  it('Deve acessar elemento na DOM com nativeElement.querySelector()', () => {
    let paragrafo = fixture.debugElement.nativeElement.querySelector('p');

    expect(paragrafo.textContent).toBe('Teste conteudo paragrafo');
  });

  it('Deve ter background green', () => {
    let btn = fixture.debugElement.query(By.css('.confirmar')).nativeElement;
    expect(btn.className).toBe('confirmar')
  });

  it('Deve redenrizar titulo: Titulo para testar o fixture.detectChanges()', () => {
    const title = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(title.textContent).toBe("Titulo para testar o fixture.detectChanges()")
  });

  it('Deve definir emoji ao clicar no botao', () => {
    let title = fixture.debugElement.query(By.css('h4')).nativeElement;
    let button = fixture.debugElement.queryAll(By.css('button'))[1];
    button.triggerEventHandler('click');
    fixture.detectChanges();
    expect(title.textContent).toBe('😊');
  })

  it('Deve preencher campo do formulario', () => {
    let input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'Alan';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('Alan');
  });
});
