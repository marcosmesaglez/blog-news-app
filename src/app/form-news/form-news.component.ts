import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INews } from '../interfaces/inews';

@Component({
  selector: 'app-form-news',
  standalone: true,
  imports: [FormsModule],
  template: `
    <!-- ... plantilla del formulario ... -->
  `,
  styleUrls: ['./form-news.component.css']
})
export class FormNewsComponent {
  @Output() newsAdded = new EventEmitter<INews>();

  news: INews = { title: '', image: '', content: '', date: '' };

  submitNews(): void {
    if (
      !this.news.title.trim() ||
      !this.news.image.trim() ||
      !this.news.content.trim() ||
      !this.news.date.trim()
    ) {
      alert('Todos los campos son obligatorios.');
      return;
    }
    this.newsAdded.emit({ ...this.news });
    this.news = { title: '', image: '', content: '', date: '' };
  }
}
