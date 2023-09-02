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
        this.newsSearchService.searchNews(searchQuery, 100).subscribe(results => {
          this.newsResults = results;
          for (let i = 0; i < this.newsResults.length; i++) {
            this.newsResults[i].publishedAt = format(this.data, 'dd MMMM yyyy', { locale: enUS });
            if (this.newsResults[i].urlToImage === null) {
              this.newsResults.splice(i,1)
            }
          }
          console.log(this.newsResults)
        })
      }
    })
  }
}
