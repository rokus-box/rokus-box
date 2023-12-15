import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'projekts/butane',
    loadComponent: () =>
      import('./projekts/butane/butane.component').then(
        (m) => m.ButaneComponent,
      ),
  },
  {
    path: 'roku-kim',
    loadComponent: () =>
      import('./roku-kim/roku-kim.component').then((m) => m.RokuKimComponent),
  },
];
