import { Component } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
  slides = [{'image': './assets/Images/Carousel/1920x480-water-droplets.jpg'}, {'image': './assets/Images/Carousel/luiz-henrique-brito-galaxy.jpg'},{'image': './assets/Images/Carousel/181231-FQ-New-Brand-NEWS-Web-Banner-1920x480.jpg'}, {'image': './assets/Images/Carousel/next-interactions-banner-4.png'}, {'image': './assets/Images/Carousel//monoTex-5--Headerbild-1920-x-480-Homepage-Produkte.jpg'}];

}
