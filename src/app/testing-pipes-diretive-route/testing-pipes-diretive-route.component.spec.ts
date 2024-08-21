import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingPipesDiretiveRouteComponent } from './testing-pipes-diretive-route.component';
import { HttpPipe } from 'src/shared/pipes/http.pipe';
import { Router } from '@angular/router';

describe('TestingPipesDiretiveRouteComponent', () => {
  let component: TestingPipesDiretiveRouteComponent;
  let fixture: ComponentFixture<TestingPipesDiretiveRouteComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestingPipesDiretiveRouteComponent,
        HttpPipe
      ],
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingPipesDiretiveRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve navegar para a url passada', () => {
    const url = "extrato";
    spyOn(router, 'navigate');
    component.navigateUrl(url);

    expect(router.navigate).toHaveBeenCalledWith(['/extrato'])
  });
});
