import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestandoDiretivasComponent } from './testando-diretivas.component';
import { HoverFocusDirective } from 'src/shared/directive/hoverfocus.directive';
import { By } from '@angular/platform-browser';

describe('TestandoDiretivasComponent', () => {
  let component: TestandoDiretivasComponent;
  let fixture: ComponentFixture<TestandoDiretivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestandoDiretivasComponent,
        HoverFocusDirective
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestandoDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve alterar background quando passar mouse sobre o titulo', () => {
    const title = fixture.debugElement.query(By.css('h1'));

    title.triggerEventHandler('mouseover');
    fixture.detectChanges();

    expect(title.nativeElement.style.backgroundColor).toBe('blue');
  })
});
