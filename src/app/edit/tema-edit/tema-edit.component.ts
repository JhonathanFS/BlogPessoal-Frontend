import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(
    private router: Router,
    private tService: TemaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      // alert('Sua sessão expirou, faça o login novamente')
      this.router.navigate(['/login'])
    }
    this.tService.refreshToken()
    let id =this.route.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id: number){
    this.tService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  tEdit(){
    this.tService.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema atualizado com sucesso!')
      this.router.navigate(['/tema'])
    })
  }
}
