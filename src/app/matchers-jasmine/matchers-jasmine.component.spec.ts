import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersJasmineComponent } from './matchers-jasmine.component';

describe('MatchersJasmineComponent', () => {
  let component: MatchersJasmineComponent;
  let fixture: ComponentFixture<MatchersJasmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersJasmineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersJasmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve testar o uso do matcher toEqual', () => {
    expect(true).toEqual(true);
  })

  it('Deve testar o uso do matcher toBeTruthy', () => {
    expect([]).toBeTruthy();
  })

  it('Deve testar o uso do matcher toBeFalsy', () => {
    expect("").toBeFalsy();
  })

  it('Deve testar o uso do matcher toBeTrue', () => {
    expect(true).toBeTrue();
  })
  
  it('Deve testar o uso do matcher toBeFalse', () => {
    expect(false).toBeFalse();
    // expect(NaN).toBeFalse(); --> Não é toBeFalse
  })

  it('Deve testar o uso do matcher not', () => {
    expect('Danilo').not.toEqual('Jessica');
  })

  it('Deve testar o uso do matcher toContain', () => {
    expect('Marvel').toContain('Mar');
    expect([1,2,3]).toContain(1);
  })

  it('Deve testar o uso do matcher toBeDefined', () => {
    let name;
    name = 'Alan'
    expect(name).toBeDefined(); // False senão inserir valor na variavel
  })

  it('Deve testar o uso do matcher toBeUndefined', () => {
    let name;
    expect(name).toBeUndefined(); // True senão inserir valor na variavel
  })

  it('Deve testar o uso do matcher toBeNull', () => {
    expect(null).toBeNull();
  }) 

  it('Deve testar o uso do matcher NaN', () => {
    expect(NaN).toBeNaN();
  })

  it('Deve testar o uso do matcher toBeGreatherThan', () => {
    expect(10).toBeGreaterThan(5)
  })

  it('Deve testar o uso do matcher toBeLessThan', () => {
    expect(10).toBeLessThan(20)
  })

  it('Deve testar o uso do matcher toBeCloseTo', () => {
    expect(12.3).toBeCloseTo(12.3, 3)
  })

  it('Deve testar o uso do matcher toMatch', () => {
    expect('Marvel').toMatch(/Marvel/)
  })

  it('Deve testar o uso do matcher toThrow', () => {
    expect(() => {
      throw new Error('meu erro')
    }).toThrow()
  })
});
