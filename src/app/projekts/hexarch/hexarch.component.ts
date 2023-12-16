import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hexarch',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, NgOptimizedImage],
  templateUrl: './hexarch.component.html',
  styleUrl: './hexarch.component.scss',
})
export class HexarchComponent {}
