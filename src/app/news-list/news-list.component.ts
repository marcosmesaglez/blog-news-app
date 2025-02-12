import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INews } from '../interfaces/inews';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="news-list">
      <h2>Listado de Noticias</h2>
      <div class="news-item" *ngFor="let news of newsList">
        <h3>{{ news.title }}</h3>
        <img [src]="news.image" alt="{{ news.title }}" class="news-image">
        <p>{{ news.content }}</p>
        <p class="news-date">{{ news.date | date:'mediumDate' }}</p>
      </div>
    </section>
  `,
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  @Input() newsList: INews[] = [];
}
