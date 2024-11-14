import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [RouterOutlet,CarouselComponent , RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'introduction-to-angular';
  
}
