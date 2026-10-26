import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBindingComponent {
  ecole: string = 'ISI G2';

  pers = {
    num: 1,
    nom: 'Lembarki',
    prenom: 'Oussama'
  };
}
