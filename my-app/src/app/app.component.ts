import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  // Emojiquiz click events
  emojiquizPreview(): void {
    location.href = "https://github.com/JeezyDev/discord-emojiquiz";
  }
  emojiquizSource(): void {
    location.href = "https://github.com/JeezyDev/discord-emojiquiz";
  }

  // Memory click events
  memoryPreview(): void {
    location.href = "https://github.com/JeezyDev/Memory-game";
  }
  memorySource(): void {
    location.href = "https://github.com/JeezyDev/Memory-game";
  }

  // Bookmark Landing Page click events
  bookmarkPreview(): void {
    location.href = "https://jeezydev.github.io/Bookmark-Landing-Page/";
  }
  bookmarkSource(): void {
    location.href = "https://github.com/JeezyDev/Bookmark-Landing-Page";
  }
 }
