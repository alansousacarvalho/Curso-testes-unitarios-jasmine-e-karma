import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-output',
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss'
})
export class InputOutputComponent {
  @Input() usuario: any;
  @Output() mensagemUsuario: EventEmitter<any> = new EventEmitter();

  emitirMsg() {
    this.mensagemUsuario.emit('mensagem enviada.');
  }
}
