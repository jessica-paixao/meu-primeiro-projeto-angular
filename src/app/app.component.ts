import { Component } from '@angular/core';
import { ImportsModule } from './imports';

interface Usuario {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nomeDoUsuario!: string;
  emailDoUsuario!: string;
  telefoneDoUsuario!: string;

  usuarios!: Usuario[];

  constructor() {}

  ngOnInit() {
    this.usuarios = [
      {
        id: 1,
        nome: 'Jéssica Paixao',
        email: 'jessicapaixao@gmail.com',
        telefone: '+55999999999',
      },
      {
        id: 2,
        nome: 'Julia Lima',
        email: 'julia@gmail.com',
        telefone: '+55999999999',
      },
    ];
  }

  adicionarUsuario() {
    const usuario: Usuario = {
      id: this.usuarios.length + 1,
      nome: this.nomeDoUsuario,
      email: this.emailDoUsuario,
      telefone: this.telefoneDoUsuario,
    };

    this.usuarios.push(usuario);
    this.limparFormulario();
  }

  limparFormulario() {
    this.nomeDoUsuario = '';
    this.emailDoUsuario = '';
    this.telefoneDoUsuario = '';
  }

  removerUsuario(usuario: Usuario) {
    const indice = this.usuarios.findIndex((item) => item.id === usuario.id);
    this.usuarios.splice(indice, 1);
  }
}
