import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // 34.94.108.97
  endpoint = 'http://localhost:8080/api/v1/tracks';

  constructor(private http: HttpClient) { }

  public findByCity(city: string) {
    const url = `${this.endpoint}?city=${city}`;
    return this.http.get(url);
  }

  public findByCoordinates(lat: number, lon: number): any { // Observable<any>
    const httpHeaders = new HttpHeaders({
      Acept: 'application/json',
      // 'Content-Type': 'application/json'
    });
    const params = new HttpParams()
      .set('lat', lat as unknown as string)
      .set('lon', lon as unknown as string);
    const options = {
      headers: httpHeaders,
      params
    };
    return this.http.get<any>(this.endpoint, options)
      .pipe(
        retry(3),
        catchError((error: any) => {
        console.log('error', error);
        throwError(error);
        return of(null);
      }));
    /* const promise = new Promise((resolve, reject) => {
      this.http.get(this.endpoint, options)
        .toPromise()
        .then(
          res => { // Success
            console.log('res', res);
            resolve(res);
          },
          msg => { // Error
            reject(msg);
          }
        );
    }); */
    // return promise;
  }

  private errorHandler(error: any): void {
    console.log(error);
  }
}
