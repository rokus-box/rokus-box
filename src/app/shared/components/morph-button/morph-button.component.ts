import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-morph-button',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './morph-button.component.html',
  styleUrl: './morph-button.component.scss',
})
export class MorphButtonComponent {
  @Input() subTitle: string;
}
