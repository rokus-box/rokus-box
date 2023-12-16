import { Component, Input, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-morph-button',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './morph-button.component.html',
  styleUrl: './morph-button.component.scss',
})
export class MorphButtonComponent implements OnInit {
  @Input() subTitle: string;
  @Input() color: string;
  @Input() textColor: string;

  ngOnInit() {
    if (this.color == null) {
      this.color = '#ef6c00';
    }

    if (this.textColor == null) {
      this.textColor = 'black';
    }
  }
}
