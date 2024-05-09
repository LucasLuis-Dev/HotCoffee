import { Component, OnInit } from '@angular/core';
import { INew } from 'src/app/interfaces/new.interface';
import { IRequestNew } from 'src/app/interfaces/requestNew.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsDisplayed: INew[] = [];
  newsCache: INew[] = [];
  nextPage: string = '';
  selectedCategory: string = 'technology';
  isLoading: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadNews()
  }


  loadNews(): void {
    this.isLoading = true;
    this.dataService.getNews().subscribe({
      next:(data: IRequestNew) => {
        console.log(data)
        this.newsCache = data.results;
        this.nextPage = data.nextPage
        this.filterNews()
        this.isLoading = false
      },
      error: (error: Error) => {
        console.error(error)
      }
    })
  }

  onCategoryChange() {
    this.newsCache = []
    this.newsDisplayed = []
    this.isLoading = true;
    this.dataService.getNewsByCategory(this.selectedCategory).subscribe({
      next: (data:IRequestNew) => {
        this.newsCache = data.results
        this.nextPage = data.nextPage
        this.filterNews()
        this.isLoading = false
      },
      error: (error: Error) => {
        console.error(error)
      }
    })
  }

  filterNews() {
    this.newsCache = this.newsCache.filter(newItem => {
      return !(newItem.image_url && newItem.image_url.endsWith('.gif'));
    });
    this.newsDisplayed = [...this.newsDisplayed, ...this.newsCache];
  }

  moreNews() {
    this.isLoading = true;
    this.dataService.getNewsByNextPage(this.selectedCategory, this.nextPage).subscribe({
      next:(data: IRequestNew) => {
        this.newsCache =  data.results
        this.nextPage = data.nextPage
        this.filterNews()
        this.isLoading = false
      },
      error: (error: Error) => {
        console.error(error)
      }
    })
  }
}
