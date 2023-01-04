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

  mobileNavbar(): void {
     let get_icon = document.getElementById("mobile-dropdown-menu");
     let mobile_nav = document.createElement("div");
     mobile_nav.innerHTML = `
    <ul style="margin: 0; padding: 0;  display: flex; flex-direction: column; list-style-type: none; gap: .4rem; background-color: #fff; align-items: center;">
    <li style="font-weight: bold; width: 100%; display: flex; justify-content: center; border-bottom: 1px solid #444;">
    <a style="text-decoration: none; color: black;" href="#projects-container">Projects</a>
      </li>
      <li style="font-weight: bold; width: 100%; display: flex; justify-content: center; border-bottom: 1px solid #444;">
    <a style="text-decoration: none; color: black;" href="#header-section-desktop">About</a>
      </li>
      <li style="font-weight: bold">
    <a style="text-decoration: none; color: black;" href="#contact">Contact</a>
      </li>
      </ul>`;
      // @ts-ignore
      if (get_icon.innerText === "☰") {
        // @ts-ignore
        get_icon.innerText = "x";
        // @ts-ignore
        get_icon.insertAdjacentElement("afterbegin", mobile_nav);
      } else {
        // @ts-ignore
        get_icon.innerText = "☰";
      }
    }
 }
