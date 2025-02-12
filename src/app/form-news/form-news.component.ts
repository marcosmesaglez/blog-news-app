import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INews } from '../interfaces/inews';

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
          >
        </div>
        <div class="form-group">
          <label for="image">Imagen (URL):</label>
          <input
            type="text"
            id="image"
            placeholder="URL de la imagen"
            [(ngModel)]="news.image"
            name="image"
          >
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
        <div class="form-group">
          <label for="date">Fecha de Publicación:</label>
          <input
            type="date"
            id="date"
            [(ngModel)]="news.date"
            name="date"
          >
        </div>
        <button type="submit" class="btn">Publicar</button>
      </form>
    </section>
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
