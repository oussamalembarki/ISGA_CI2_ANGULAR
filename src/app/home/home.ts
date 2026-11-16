import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  readonly tps = [
    { title: 'TP 1', path: '/tp1', description: 'Énoncé à définir.' },
    { title: 'TP 2', path: '/tp2', description: 'Énoncé à définir.' },
    {
      title: 'TP 3 - Jeu du nombre secret',
      path: '/tp3',
      description: 'Deviner un nombre secret entre 0 et 100 en cinq essais.'
    }
  ];
}
