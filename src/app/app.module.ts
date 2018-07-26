import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchService } from './search.service';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { SlatedHeaderComponent } from './slated-header/slated-header.component';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    SlatedHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
