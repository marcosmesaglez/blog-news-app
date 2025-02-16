import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INews } from '../interfaces/inews';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  @Input() newsList: INews[] = [];
}

