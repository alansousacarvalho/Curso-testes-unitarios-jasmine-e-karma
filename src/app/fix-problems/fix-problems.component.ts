import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ModalErrorComponent } from '../modal-error/modal-error/modal-error.component';

@Component({
  selector: 'fixproblems',
  templateUrl: './fix-problems.component.html',
  styleUrls: ['./fix-problems.component.scss']
})
export class FixproblemsComponent implements OnInit {
  form!: FormGroup;
  price: number = 0;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    })
  }

  openDialog() {
    this.dialog.open(ModalErrorComponent, {
      width: '250px',
      data: {}
    })
  }

}
