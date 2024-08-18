import { Component, OnInit } from '@angular/core';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-assincrono',
  templateUrl: './assincrono.component.html',
  styleUrls: ['./assincrono.component.scss']
})
export class AssincronoComponent implements OnInit {
  data: any;
  dataPromisse: any;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.httpService.getUsers().subscribe(res => {
      this.data = res;
    });
  }

  getUsersWithPromise() {
    this.httpService.getUsersWithPromise().then(res => {
      this.dataPromisse = res;
    });
  }

}
