import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
    selector: "news-list",
    template: `
        <input type="text" [(ngModel)]="searchText" placeholder="Search"/>
        <div *ngFor="let news of (newsItems | newsSearch: searchText); let newsId = index">
        <h3>{{news.title | uppercase}}</h3>
        <p [ngClass] = "{collapsed: selectedNewsId != newsId}">
            {{news.body}}
        </p>
        <a href (click) = "expandNews(newsId)" *ngIf = "selectedNewsId != newsId">More...</a>
        </div>
    `,
    styles: [`.collapsed {
        display: none;
    }`]
})
export class NewsList implements OnInit {
    //Commented out for shortcut syntax on page 92
    //newsSvc: NewsService
    selectedNewsId: number
    newsItems: {title: string, body: string}[] = []
    searchText: string

    constructor(private newsSvc: NewsService) {
        //this.newsSvc = svc
    }

    ngOnInit() {
        this.newsSvc.getNewsItems().subscribe(response => {
            this.newsItems = response;
        },
        error => {
            alert("Sorry. There was a problem getting data.")
        })
    }

    expandNews(id: number) {
        this.selectedNewsId = id

        return false
    }
}
