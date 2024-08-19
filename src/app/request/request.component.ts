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
  listaUsuarios: any;
  usuarioASerAlterado: any;
  mostrarAlterarUsuario: boolean;

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFormGroup();
    this.getUsers();
  }

  getUsers() {
    this.httpService.getUsers().subscribe(res => {
      this.listaUsuarios = res;
    });
  }

  getUsersByID(id: number) {
    this.httpService.getUsersById(id).subscribe();
  }

  postUsers() {
    this.form.patchValue({
      id: Math.floor(Math.random() * 50) + 1
    })
    this.httpService.postUser(this.form.value).subscribe({
      next: (v) => {
        this.getUsers();
        this.form.reset();
      }
    });
  }

  deleteUser(id: number) {
    this.httpService.deleteUser(id).subscribe({
      next: (v) => {
        this.getUsers();
      }
    });
  }

  abrirModalAtualizarUsuario(usuario: any) {
    this.mostrarAlterarUsuario = true;
    this.usuarioASerAlterado = usuario;
  }

  fecharModalAtualizarUsuario(event: boolean) {
    this.mostrarAlterarUsuario = event;
    this.getUsers();
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
