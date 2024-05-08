import { Component, OnInit } from '@angular/core';
import { INew } from 'src/app/interfaces/new.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsDisplayed: INew[] = [];
  newsCache: INew[] = [];
  page: string = '';
  selectedCategory: string = 'technology';
  isLoading: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (this.newsDisplayed.length === 0) {
      this.loadMoreNews('',this.selectedCategory);
    }
  }

  onCategoryChange() {
    this.newsCache = []
    this.newsDisplayed = []
    this.loadMoreNews('',this.selectedCategory);

  }

  loadMoreNews(page: string = '', category: string) {
    this.isLoading = true;
    if (page === '') {
      this.dataService.fetchData('br', category).subscribe(
        (news: any) => {
          console.log(news)
          this.page = news.nextPage
          this.newsCache = news.results;

          this.filterNews();
          this.isLoading = false;
        },
        error => {
          console.error(error);
        }
      );
    } else {
      this.dataService.fetchData('br', category, page).subscribe(
        (news: any) => {
          console.log(news)
          this.page = news.nextPage
          this.newsCache = news.results;

          this.filterNews();
          this.isLoading = false;
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  filterNews() {
    this.newsCache = this.newsCache.filter(newItem => {
      return !(newItem.image_url && newItem.image_url.endsWith('.gif'));
    });
    


    this.newsDisplayed = [...this.newsDisplayed, ...this.newsCache];
  }

  moreNews() {
    this.loadMoreNews(this.page, this.selectedCategory);
  }
}
