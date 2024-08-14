import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spyon',
  templateUrl: './spyon.component.html',
  styleUrls: ['./spyon.component.scss']
})
export class SpyonComponent implements OnInit {
  logged: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  isLogged() {
    this.logged = !this.logged;
  }

  voltarHome() {
    this.router.navigate(['/'])
  }

}
