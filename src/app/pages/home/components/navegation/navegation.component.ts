import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent {

  searchQuery: string = '';

  constructor(private router: Router){}

  search() {
    // Aqui você pode implementar a lógica de busca com base em this.searchQuery
    // Por exemplo, você pode navegar para uma rota de resultados de pesquisa com queryParams
    // Ou pode executar uma chamada a uma API de pesquisa
    this.router.navigate(['/resultado-pesquisa', this.searchQuery]);
    console.log('Pesquisando por:', this.searchQuery);
  }

}
