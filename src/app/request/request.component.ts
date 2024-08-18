import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  form: FormGroup;

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: null,
      email: null,
      age: null
    })
  }

  getUsersByID(id: number) {
    this.httpService.getUsersById(id).subscribe();
  }

  postUsers() {
    this.httpService.postUser(this.form.value).subscribe();
  }

}
