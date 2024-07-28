import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { ModalErrorComponent } from './modal-error.component';

describe('ModalErrorComponent', () => {

  let component : ModalErrorComponent;
  let fixture: ComponentFixture<ModalErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalErrorComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        FormsModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Deve ter um h1', () => {
    
  });
});
