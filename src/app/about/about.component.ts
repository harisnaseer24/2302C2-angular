import { Component } from '@angular/core';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ TitleCasePipe, UpperCasePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  ourCompany:string="hn corp";
  aboutCompany:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi reprehenderit ducimus pariatur commodi dolor dolorum. Suscipit distinctio quis nesciunt sunt soluta error inventore voluptas, provident iste fugiat placeat culpa libero est magni corrupti itaque deserunt cum, corporis quia aspernatur. Libero numquam illum adipisci excepturi? Ipsa et eum temporibus doloribus ducimus blanditiis, maiores aliquam illum nam?";


}
