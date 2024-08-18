import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyonComponent } from './spyon.component';
import { Router } from '@angular/router';

describe('SpyonComponent', () => {
  let component: SpyonComponent;
  let fixture: ComponentFixture<SpyonComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpyonComponent],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate')
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SpyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve logar ao clicar em um botão', () => {
    let spiedComponent = spyOn(component, 'isLogged').and.callThrough();
    component.isLogged();
    expect(spiedComponent).toHaveBeenCalledTimes(1);
    expect(component.logged).toBeTrue();
  });

  it('Deve voltar a home ao clicar no botao', () => {
    component.voltarHome();
    expect(router.navigate).toHaveBeenCalledWith(['/'])
  });
});
