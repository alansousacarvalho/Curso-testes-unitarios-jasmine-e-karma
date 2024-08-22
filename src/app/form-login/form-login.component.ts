import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  isValidForm(): boolean {
    return this.form.valid;
  }

  getValueControl(form: any, control: string) {
    return form.get(control)?.value;
  }

  createPayload(
    email = this.getValueControl(this.form, 'email'),
    password = this.getValueControl(this.form, 'password')
  ) {
    const payload = {
      email,
      password
    }

    return payload;
  }

  login() {
    if(this.isValidForm()) {
      this.httpService.login(this.createPayload()).subscribe();
    }
  }
}
