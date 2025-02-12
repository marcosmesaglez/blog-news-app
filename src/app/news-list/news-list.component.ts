import { Component, Input } from '@angular/core';
import { INews } from '../interfaces/inews';

@Component({
  selector: 'app-news-list',
  standalone: true,
  template: `
    <!-- ... plantilla del listado ... -->
  `,
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  @Input() newsList: INews[] = [];
}
