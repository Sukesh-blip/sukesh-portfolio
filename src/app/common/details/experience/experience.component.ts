import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  currentColor: string = 'bg-blue-400';

  readonly bgColors = [
    'bg-blue-400', 'bg-violet-400', 'bg-teal-400',
    'bg-emerald-400', 'bg-sky-400', 'bg-indigo-400',
  ];

  changeColor(): void {
    const idx = Math.floor(Math.random() * this.bgColors.length);
    this.currentColor = this.bgColors[idx];
  }
}
