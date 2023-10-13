import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  fetchData(country: string, category: string = '', page: string = '', searchQuery: string = '') {

    if (page != '') {
      const params = new HttpParams()
      .set('apikey', 'pub_3001762768cb972778a02365931bdb255a5eb')
      .set('country', country)
      .set('category', category)
      .set('image', 1)
      .set('video', 0)
      .set('page', page)

      const url = 'https://newsdata.io/api/1/news';
      return this.http.get(url, { params });

    } else if (searchQuery != '') {

      const params = new HttpParams()
        .set('apikey', 'pub_3001762768cb972778a02365931bdb255a5eb')
        .set('country', country)
        .set('image', 1)
        .set('video', 0)
        .set('q', searchQuery)

        const url = 'https://newsdata.io/api/1/news';
        return this.http.get(url, { params });

    } else {
      const params = new HttpParams()
      .set('apikey', 'pub_3001762768cb972778a02365931bdb255a5eb')
      .set('country', country)
      .set('category', category)
      .set('image', 1)
      .set('video', 0);

      const url = 'https://newsdata.io/api/1/news';
      return this.http.get(url, { params });
    }



  }
}

