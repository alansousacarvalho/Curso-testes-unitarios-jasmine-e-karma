import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'teste-componente',
  templateUrl: './teste-componente.component.html',
  styleUrl: './teste-componente.component.scss'
})
export class TesteComponenteComponent {
  title: string = "Titulo para testar o fixture.detectChanges()";
  emoji: string;
  form: FormGroup;
  nomeNgModel: string;
  usuario: any;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: null
    });
    this.usuario = {
      id: "1",
      name: "Alan",
      email: "alan@outlook.com",
      age: "25"
    };
  }

  setarEmoji() {
    this.emoji = "😊";
  }

  setarFormulario() {
    this.form.patchValue({
      nome: this.nomeNgModel
    })
    console.log('form: ', this.form)
  }

  mensagemDoUsuario(event: string) {
    console.log('Mensagem do filho: ', event)
  }

}

