import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SocialIconsComponent } from '../social-icons/social-icons.component';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [CommonModule, SocialIconsComponent],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css',
})
export class ProfileDetailsComponent {
  emailCopied = false;
  constructor(private router: Router) {}

  copyEmail(): void {
    navigator.clipboard.writeText('biradarsukesh4@gmail.com').then(() => {
      this.emailCopied = true;
      setTimeout(() => (this.emailCopied = false), 2000);
    });
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
