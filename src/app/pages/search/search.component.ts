import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    // Obter o parâmetro 'query' da rota
    this.route.params.subscribe(params => {
      this.searchQuery = params['query'];

      this.search();
    });
  }

  search() {
      this.isLoading = true;
      this.dataService.fetchData('br,us', '', '' , this.searchQuery).subscribe(
        (news: any) => {
          console.log(news)
          this.searchResults = news.results;
          this.isLoading = false;
          this.filterAndMapNews();
        },
        error => {
          console.error(error);
        }
      );
    }


    filterAndMapNews() {
      this.searchResults = this.searchResults.filter(newItem => {

        return !(newItem.image_url && newItem.image_url.endsWith('.gif'));
      });

      this.searchResults = this.searchResults.map(newItem => {
        if (newItem.description.length > 0) {
          const secondDotIndex = newItem.description.indexOf('.', newItem.description.indexOf('.') + 1);

          if (secondDotIndex !== -1) {
            newItem.description = newItem.description.substring(0, secondDotIndex + 1);
          }
        }
        return newItem;
      });
    }
}
