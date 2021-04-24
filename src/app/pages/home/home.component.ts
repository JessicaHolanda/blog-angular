import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from '../../service/tema.service';
import { AuthService } from '../../service/auth.service';
import { ComentarioService } from '../../service/comentario.service';
import { AlertasService } from '../../service/alertas.service';
import { PostagemService } from '../../service/postagem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private comentarioService: ComentarioService
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.alertas.showAlertInfo('Seu token expirou, faça o login novamente.')
      this.router.navigate(['/login'])
    }
  }

}
