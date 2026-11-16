import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then((module) => module.Home)
  },
  {
    path: 'tp1',
    loadComponent: () => import('./tps/tp1/tp1').then((module) => module.Tp1)
  },
  {
    path: 'tp2',
    loadComponent: () => import('./tps/tp2/tp2').then((module) => module.Tp2)
  },
  {
    path: 'tp3',
    loadComponent: () => import('./tps/tp3-jeu/tp3-jeu').then((module) => module.Tp3Jeu)
  }
];
