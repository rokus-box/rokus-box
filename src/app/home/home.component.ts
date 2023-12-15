import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { MorphButtonComponent } from '../shared/components/morph-button/morph-button.component';
import { SvgKeyComponent } from '../shared/components/svg-key/svg-key.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatDividerModule,
    RouterLink,
    MorphButtonComponent,
    SvgKeyComponent,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
