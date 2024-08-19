import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'alterar-usuario',
  templateUrl: './alterar-usuario.component.html',
  styleUrl: './alterar-usuario.component.scss'
})
export class AlterarUsuarioComponent {
  @Input() mostrarAlterarUsuario: boolean;
  @Input() usuarioASerAlterado: any;
  @Output() fecharModalChange = new EventEmitter();
  form: FormGroup;

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createFormGroup();
  }

  ngOnChanges() {
    if (this.mostrarAlterarUsuario) {
      this.form.patchValue({
        name: this.usuarioASerAlterado.name,
        email: this.usuarioASerAlterado.email,
        age: this.usuarioASerAlterado.age
      })
    }
  }

  alterarUsuario() {
    this.form.patchValue({
      id: Math.floor(Math.random() * 50) + 1
    })
    this.httpService.putUser(this.usuarioASerAlterado.id, this.form.value).subscribe(res => {
      this.fecharModalChange.emit(false);
    });
  }

  fecharModal() {
    this.fecharModalChange.emit(false);
  }

  createFormGroup() {
    this.form = this.fb.group({
      name: null,
      email: null,
      age: null,
      id: null
    });
  }
}
