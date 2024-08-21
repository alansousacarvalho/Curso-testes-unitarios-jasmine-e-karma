import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'testing-pipes-diretive-route',
  templateUrl: './testing-pipes-diretive-route.component.html',
  styleUrl: './testing-pipes-diretive-route.component.scss'
})
export class TestingPipesDiretiveRouteComponent {
  url = "http://google.com"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  irParaHome() {
    this.router.navigate(['/'])
  }

  navigateUrl(url: string) {
    this.router.navigate([`/${url}`])
  }
}
