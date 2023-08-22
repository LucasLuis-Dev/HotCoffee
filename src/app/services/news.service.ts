import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines?';
  private requestCount = 0;

  constructor(private http: HttpClient) { }


  getNews(q:string = "", country: string = '', category: string = '', pageSize: number = 5, page: number = 1): Observable<any> {
    if (this.requestCount >= 100) {
      return throwError('Limite de requisições excedido');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });

    return this.http.get<any>(this.apiUrl, { headers, params: {  country, category, pageSize: pageSize.toString(), page: page.toString()} })
      .pipe(
        map(data => {
          return data.articles;
        }),
        catchError(error => {
          return throwError('Erro na requisição');
        })
      );
  }


  searchNews(q:string = "", pageSize: number = 5) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });

    return this.http.get<any>(this.apiUrl, { headers, params: { q, pageSize: pageSize.toString() } })
      .pipe(
        map(data => {
          return data.articles;
        }),
        catchError(error => {
          return throwError('Erro na requisição');
        })
      );
  }





}
