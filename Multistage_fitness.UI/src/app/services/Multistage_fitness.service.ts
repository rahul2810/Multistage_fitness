import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})

export class Multistage_fitnessService {

  constructor(private httpclient: HttpClient) { }
  getDataOnLoad(): Observable<any> {
    return this.httpclient.get('https://localhost:44337/api/TestPage');
    }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred with API', error);
    return Promise.reject(error.message || error);
 }
}
