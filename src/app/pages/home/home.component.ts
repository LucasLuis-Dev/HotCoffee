import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsDisplayed: any[] = [];
  newsCache: any[] = [];
  page: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (this.newsDisplayed.length === 0) {
      this.loadMoreNews();
      console.log('requisição feita')
    }
  }

  loadMoreNews(page: string = '') {
    if (page === '') {
      this.dataService.fetchData('br', 'technology').subscribe(
        (news: any) => {
          console.log(news)
          this.page = news.nextPage
          this.newsCache = news.results;

          this.filterAndMapNews();
        },
        error => {
          console.error(error);
        }
      );
    } else {
      this.dataService.fetchData('br', 'technology', page).subscribe(
        (news: any) => {
          console.log(news)
          this.page = news.nextPage
          this.newsCache = news.results;

          this.filterAndMapNews();
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  filterAndMapNews() {
    this.newsCache = this.newsCache.filter(newItem => {

      return !(newItem.image_url && newItem.image_url.endsWith('.gif'));
    });

    this.newsCache = this.newsCache.map(newItem => {
      if (newItem.description.length > 0) {
        const firstDotIndex = newItem.description.indexOf('.');

        if (firstDotIndex !== -1) {
          newItem.description = newItem.description.substring(0, firstDotIndex + 1);
        }
      }
      return newItem;
    });


    this.newsDisplayed = [...this.newsDisplayed, ...this.newsCache];
  }

  moreNews() {
    this.loadMoreNews(this.page);
  }
}
