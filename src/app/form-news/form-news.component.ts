import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface News {
  title: string;
  content: string;
}

@Component({
  selector: 'app-form-news',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="news-form">
      <h2>Publicar una Noticia</h2>
      <form (ngSubmit)="submitNews()">
        <div class="form-group">
          <label for="title">Título:</label>
          <input
            type="text"
            id="title"
            placeholder="Escribe el título"
            [(ngModel)]="news.title"
            name="title"
          />
        </div>
        <div class="form-group">
          <label for="content">Contenido:</label>
          <textarea
            id="content"
            placeholder="Escribe el contenido"
            [(ngModel)]="news.content"
            name="content"
          ></textarea>
        </div>
        <button type="submit" class="btn">Publicar</button>
      </form>
    </section>
  `,
  styleUrls: ['./form-news.component.css']
})
export class FormNewsComponent {
  @Output() newsAdded = new EventEmitter<News>();

  news: News = { title: '', content: '' };

  submitNews(): void {
    if (this.news.title && this.news.content) {
      // Emitimos una copia de la noticia
      this.newsAdded.emit({ ...this.news });
      // Reiniciamos el formulario
      this.news = { title: '', content: '' };
    }
  }
}
