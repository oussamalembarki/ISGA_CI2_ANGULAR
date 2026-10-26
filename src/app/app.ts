import { Component } from '@angular/core';
import { DataBindingComponent } from './data-binding/data-binding';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataBindingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'demoAppGroupA_ISI';
}
