import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { newsSearchService } from 'src/app/services/newsSearch.service';
import { format } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  newsResults: any[] = [];
  data: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private newsSearchService: newsSearchService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const searchQuery = params['searchQuery'];
      if (searchQuery) {
        this.newsSearchService.searchNews(searchQuery).subscribe(results => {
          this.newsResults = results;
          for (let news of this.newsResults) {
            news.publishedAt = format(this.data, 'dd MMMM yyyy', { locale: enUS });
          }
          console.log(this.newsResults)
        })
      }
    })
  }
}
