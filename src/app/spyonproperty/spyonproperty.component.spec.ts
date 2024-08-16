import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyonpropertyComponent } from './spyonproperty.component';

describe('SpyonpropertyComponent', () => {
  let component: SpyonpropertyComponent;
  let fixture: ComponentFixture<SpyonpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpyonpropertyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SpyonpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve retornar a mensagem correta', () => {
    const mensagem = 'Olá, mundo!';

    spyOnProperty(component, 'message', 'get').and.returnValue(mensagem);

    expect(component.message).toEqual(mensagem);
  });
});
