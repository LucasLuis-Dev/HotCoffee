import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRequestNew } from 'src/app/interfaces/requestNew.interface';
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
    this.route.params.subscribe(params => {
      this.searchQuery = params['query'];

      this.search();
    });
  }

  search() {
      this.isLoading = true;
      this.dataService.getNewsBySearch(this.searchQuery).subscribe({
        next:(data: IRequestNew) => {
          this.searchResults =  data.results
          this.filterNews()
          this.isLoading = false
        },
        error: (error: Error) => {
          console.error(error)
        }
      })
    }

    filterNews() {
      this.searchResults = this.searchResults.filter(newItem => {

        return !(newItem.image_url && newItem.image_url.endsWith('.gif'));
      });
    }
}
