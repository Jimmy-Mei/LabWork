import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NewsList } from './news-list/newsList.component';
import { NewsService } from './news-list/news.service';
import { NewsSearchPipe } from './news-list/newsSearch.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NewsList,
    NewsSearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
