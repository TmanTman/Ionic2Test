import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

@Injectable()
export class RestService {

  results = [];

  constructor(private http: HttpClient) { }

  makePost() {
    console.log('a')
    this.http.post('https://swapi.co/api/planets/1/', {
      manufacturer: 'VW',
      model: 'polo',
      transmission: 'automatic',
      paint: 'gunmetal grey'
    })
    .pipe(
      tap((res) => console.log('piping data: ' + res)),
      catchError(this.handleError('makePost', []))
    )
    .subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}