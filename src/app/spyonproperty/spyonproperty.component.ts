import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spyonproperty',
  templateUrl: './spyonproperty.component.html',
  styleUrls: ['./spyonproperty.component.scss']
})
export class SpyonpropertyComponent implements OnInit {
  mensagem: string = 'Olá, mundo!';

  constructor() { }

  ngOnInit(): void {
  }

  get message(): string {
    return this.mensagem;
  }

}
