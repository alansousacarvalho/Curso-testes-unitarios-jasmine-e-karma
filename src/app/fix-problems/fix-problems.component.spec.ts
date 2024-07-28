import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixproblemsComponent } from './fix-problems.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('FixproblemsComponent', () => {
  let component: FixproblemsComponent;
  let fixture: ComponentFixture<FixproblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FixproblemsComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ],
      imports: [
        MatDialogModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FixproblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let data = {name: 'Danilo'}
    expect(component).toBeTruthy();
  });
});
