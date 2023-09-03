import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';


@Injectable({
    providedIn: 'root'
})
export class newsSearchService {
    private apiUrl = 'https://newsapi.org/v2/top-headlines?';

    constructor(private http: HttpClient) { }

    searchNews(q:string = "", pageSize: number = 50) {
        const headers = new HttpHeaders({
        'Authorization': `Bearer ${environment.API_KEY}`
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