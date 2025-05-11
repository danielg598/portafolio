import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { CardsEffectOptions, CoverflowEffectOptions, CubeEffectOptions, SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'app-swiper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperComponent implements OnInit {

  swiperElement = signal<SwiperContainer | null>(null);

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    // const cardEfect: SlideEf= "";
    const prevButton = this.document.getElementById('reverse');
    const nextButton = this.document.getElementById('next');
    const swiperConstructor = this.document.querySelector('swiper-container');
    if (swiperConstructor) {
      const swiperOptions: SwiperOptions = {
        navigation: false,
        // spaceBetween: 250,
        loop: true,
        effect:"slide",
        // cubeEffect:{
        //   slideShadows:false,
        //   shadow:true,
        //   shadowScale:1,
        //   shadowOffset:1.5
        // },
        // cardsEffect:{
        //   perSlideRotate:3,
        //   // perSlideOffset:5
        // },
        // coverflowEffect: {
        //   rotate: 10,
        //   slideShadows: false,
        //   stretch:200,
        //   depth:1800,
        //   modifier:1
        // },
        grabCursor:true,
        // breakpoints:{
        //   335:{
        //     slidesPerView:2
        //   }
        // }
        autoplay:{
          delay: 3000
        },
        centeredSlides:true,
        slidesPerView:"auto",
        
      };
      Object.assign(swiperConstructor!, swiperOptions);
      nextButton?.addEventListener('click', () => swiperConstructor.swiper.slideNext());
      prevButton?.addEventListener('click', () => swiperConstructor.swiper.slidePrev());

    }
    this.swiperElement.set(swiperConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }

}
