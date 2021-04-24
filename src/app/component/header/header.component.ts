import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id = environment.id

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void  {
  }

  sair(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.foto = ''
    environment.nome = ''
    environment.tipo = ''
    environment.id = 0
  }

}


