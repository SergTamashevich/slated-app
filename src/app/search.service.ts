import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient ) { }

  private baseUrl = 'https://www.slated.com/films/autocomplete/profiles/';
  private queryUrl = '?term=';

  search(terms: Observable<string>) {
    return terms.debounceTime(200)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {

    if (!term.trim()) {
      return Observable.of([]);
    }

    return this.http
      .jsonp(`${this.baseUrl}${this.queryUrl}${term}`, 'callback')
      .map(res => res);
  }

}
