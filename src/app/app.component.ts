import { Component } from '@angular/core';
import { FormNewsComponent } from './form-news/form-news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { INews } from './interfaces/inews';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormNewsComponent, NewsListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newsList: INews[] = [
    {
      title: 'Noticia Inicial 1',
      image: 'https://example.com/image1.jpg',
      content: 'Esta es la primera noticia inicial.',
      date: '2023-01-01'
    },
    {
      title: 'Noticia Inicial 2',
      image: 'https://example.com/image2.jpg',
      content: 'Esta es la segunda noticia inicial.',
      date: '2023-02-01'
    }
  ];

  addNews(newNews: INews): void {
    this.newsList.push(newNews);
  }
}
