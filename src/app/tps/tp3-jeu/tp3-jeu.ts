import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tp3-jeu',
  imports: [FormsModule],
  templateUrl: './tp3-jeu.html',
  styleUrl: './tp3-jeu.css'
})
export class Tp3Jeu {
  nombreSecret: number = Math.floor(Math.random() * 101);
  nombreSaisi: number | null = null;
  essaisRestants: number = 5;
  message: string = '';
  termine: boolean = false;

  verifier(): void {
    if (this.termine || this.nombreSaisi === null) return;

    this.essaisRestants--;

    if (this.nombreSaisi > this.nombreSecret) {
      this.message = 'Le nombre saisi est supérieur au nombre secret!!!';
    } else if (this.nombreSaisi < this.nombreSecret) {
      this.message = 'Le nombre saisi est inférieur au nombre secret!!!';
    } else {
      this.message = 'Bravo vous avez gagnez!!!!';
      this.termine = true;
      return;
    }

    if (this.essaisRestants === 0) {
      this.termine = true;
      this.message += ` Fin du jeu, le nombre secret était ${this.nombreSecret}.`;
    }
    this.nombreSaisi = null;
  }

  rejouer(): void {
    this.nombreSecret = Math.floor(Math.random() * 101);
    this.essaisRestants = 5;
    this.message = '';
    this.termine = false;
    this.nombreSaisi = null;
  }
}
