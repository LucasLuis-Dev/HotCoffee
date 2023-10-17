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
  selectedCategory: string = 'technology';
  isLoading: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (this.newsDisplayed.length === 0) {
      this.loadMoreNews('',this.selectedCategory);
      console.log('requisição feita')
    }
  }

  onCategoryChange() {
    console.log(this.selectedCategory);
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

          this.filterAndMapNews();
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

          this.filterAndMapNews();
          this.isLoading = false;
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
        newItem.description = newItem.description.substring(0, 120);
    
        if (newItem.description.charAt(newItem.description.length - 1) === '.') {
          
          newItem.description = newItem.description.slice(0, -1);
        }
      
        newItem.description += '...';
      }
      return newItem;
    });
    


    this.newsDisplayed = [...this.newsDisplayed, ...this.newsCache];
  }

  moreNews() {
    this.loadMoreNews(this.page, this.selectedCategory);
  }
}
