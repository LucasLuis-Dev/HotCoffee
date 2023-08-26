import { Component, OnInit } from '@angular/core';
import { NewsService} from '../../services/news.service'
import { format } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsDisplayed: any[] = [];
  newsCache: any[] = [];
  page: number = 0;
  data: Date = new Date();
  constructor(private newsService: NewsService) { }

  ngOnInit() {
   this.loadMoreNews()
  }

  loadMoreNews() {
    this.newsService.getNews('tech','us','technology', 100, this.page).subscribe(
      news=> {
        this.newsCache = news;
        let count: number = 0
        for(let newsItem of this.newsCache) {
          if(count > 5) {
            break
          } else {
            newsItem.publishedAt = format(this.data, 'dd MMMM yyyy', { locale: enUS });
            this.newsDisplayed.push(newsItem)
            this.newsCache.splice(count,1)
            console.log(this.newsCache);
          }
          count++
        }
        this.page ++;
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
        newsItem.publishedAt = format(this.data, 'dd MMMM yyyy', { locale: enUS });
        this.newsDisplayed.push(newsItem)
        this.newsCache.splice(count,1)
        console.log(this.newsCache);
      }
      count++
    }
  }
}



