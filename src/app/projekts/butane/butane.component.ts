import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-butane',
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './butane.component.html',
  styleUrl: './butane.component.scss',
})
export class ButaneComponent {}
