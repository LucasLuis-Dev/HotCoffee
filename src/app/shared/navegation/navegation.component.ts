import { Component, OnInit } from '@angular/core';
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
    this.router.navigate(['/search', this.searchQuery]);
    console.log('Pesquisando por:', this.searchQuery);
  }
}

