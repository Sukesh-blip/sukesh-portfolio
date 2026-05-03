import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ProfileDetailsComponent } from './common/profile/profile-details/profile-details.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProfileDetailsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  menuOpen = false;

  constructor(
    private titleService: Title,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
        this.updateTitle(event.urlAfterRedirects);
      }
    });
  }

  updateTitle(url: string): void {
    const map: Record<string, string> = {
      '/about': 'About — Sukesh Biradar',
      '/experience': 'Experience — Sukesh Biradar',
      '/projects': 'Projects — Sukesh Biradar',
      '/contact': 'Contact — Sukesh Biradar',
    };
    this.titleService.setTitle(map[url] ?? 'Sukesh Biradar');
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
