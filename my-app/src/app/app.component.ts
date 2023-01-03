import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

   checkoutWork(): void {
     // @ts-ignore
     window.open("https://github.com/JeezyDev", '_blank').focus();
   }

  // Emojiquiz click events
  emojiquizPreview(): void {
    // @ts-ignore
    window.open("https://github.com/JeezyDev/discord-emojiquiz", '_blank').focus();
  }
  emojiquizSource(): void {
    // @ts-ignore
    window.open("https://github.com/JeezyDev/discord-emojiquiz", '_blank').focus();
  }

  // Memory click events
  memoryPreview(): void {
    // @ts-ignore
    window.open("https://github.com/JeezyDev/Memory-game", '_blank').focus();
  }
  memorySource(): void {
    // @ts-ignore
    window.open("https://github.com/JeezyDev/Memory-game", '_blank').focus();
  }

  // Bookmark Landing Page click events
  bookmarkPreview(): void {
    // @ts-ignore
    window.open("https://jeezydev.github.io/Bookmark-Landing-Page/", '_blank').focus();
  }
  bookmarkSource(): void {
    // @ts-ignore
    window.open("https://github.com/JeezyDev/Bookmark-Landing-Page", '_blank').focus();
  }
 }
