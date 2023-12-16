import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'projekts',
    children: [
      {
        path: 'butane',
        loadComponent: () =>
          import('./projekts/butane/butane.component').then(
            (m) => m.ButaneComponent,
          ),
      },
      {
        path: 'redi-rs',
        loadComponent: () =>
          import('./projekts/redirs/redirs.component').then(
            (m) => m.RedirsComponent,
          ),
      },
      {
        path: 'hexarch',
        loadComponent: () =>
          import('./projekts/hexarch/hexarch.component').then(
            (m) => m.HexarchComponent,
          ),
      },
    ],
  },
  {
    path: 'who-is-roku',
    loadComponent: () =>
      import('./roku-kim/roku-kim.component').then((m) => m.RokuKimComponent),
  },
];
