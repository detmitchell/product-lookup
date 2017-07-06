import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { User } from '../models';

@Injectable()
export class SearchService {

  constructor (
    private apiService: ApiService,
    private http: Http
  ){}
  
  search(keyString): Observable<any> {
    return this.apiService.post('/product-search', {keySearch: keyString})
    .map(
      data => {
        return data;
      }
    );
  }
}