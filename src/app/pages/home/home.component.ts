import { Component, OnInit } from '@angular/core';
import { NewsService} from '../../services/news.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsDisplayed: any[] = [];
  newsCache: any[] = [];
  page: number = 0;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
   this.loadMoreNews()
  }

  loadMoreNews() {
    this.newsService.getNews('tech','us','technology', 100, this.page).subscribe(
      news=> {
        this.newsCache = news;
        console.log(news);
        let count: number = 0
        for(let newsItem of this.newsCache) {
          if(count > 5) {
            break
          } else {
            this.newsDisplayed.push(newsItem)
            this.newsCache.splice(count,1)
            console.log(this.newsCache);
          }
          count++
        }
        this.page ++;
        console.log(news);
      },
      error => {
        console.error(error);
      }
    );
  }

  moreNews() {
    let count: number = 0
    for(let newsItem of this.newsCache) {
      if(count > 5) {
        break
      } else {
        this.newsDisplayed.push(newsItem)
        this.newsCache.splice(count,1)
        console.log(this.newsCache);
      }
      count++
    }
  }
}



