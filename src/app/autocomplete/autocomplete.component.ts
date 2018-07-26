import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  constructor(private searchService: SearchService,
              private sanitized: DomSanitizer) { }

  films = null;
  searchTerm$ = new Subject<string>();

  public search(term: string): void {
    this.searchTerm$.next(term);
  }

  public sanitizeHtml(sanitizedString) {
    return this.sanitized.bypassSecurityTrustHtml(sanitizedString);
  }

  public resetSearch() {
    this.films = null;
  }

  ngOnInit() {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.films = results;
      });
  }

}
