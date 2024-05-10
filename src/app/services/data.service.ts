import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INew } from '../interfaces/new.interface';
import { IRequestNew } from '../interfaces/requestNew.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = "https://newsdata.io/api/1/news"
  

  constructor(private http: HttpClient) {}

  getNews(): Observable<IRequestNew> {
    const params: HttpParams = new HttpParams()
    .set('apikey', 'pub_3001762768cb972778a02365931bdb255a5eb')
    .set('country', 'br')
    .set('image', 1)
    .set('video', 0)
    .set('category', 'technology');
    return this.http.get<IRequestNew>(this.apiUrl, { params: params })
  }

  getNewsByCategory(category: string): Observable<IRequestNew> {
    const params: HttpParams = new HttpParams()
    .set('apikey', 'pub_3001762768cb972778a02365931bdb255a5eb')
    .set('country', 'br')
    .set('image', 1)
    .set('video', 0)
    .set('category', category);
    return this.http.get<IRequestNew>(this.apiUrl, { params: params })
  }

  getNewsByNextPage(category: string, nextPage: string): Observable<IRequestNew> {
    const params: HttpParams = new HttpParams()
    .set('apikey', 'pub_3001762768cb972778a02365931bdb255a5eb')
    .set('country', 'br')
    .set('image', 1)
    .set('video', 0)
    .set('category', category)
    .set('page', nextPage);
    return this.http.get<IRequestNew>(this.apiUrl, { params: params })
  }

  getNewsBySearch(query: string): Observable<IRequestNew> {
    const params = new HttpParams()
    .set('apikey', 'pub_3001762768cb972778a02365931bdb255a5eb')
    .set('country', 'br')
    .set('image', 1)
    .set('video', 0)
    .set('q', query);
    return this.http.get<IRequestNew>(this.apiUrl, { params: params })
  }
}

