import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { CardsEffectOptions, CoverflowEffectOptions, CubeEffectOptions, SwiperOptions } from 'swiper/types';
import { ButtonModule } from 'primeng/button';
register();

@Component({
  selector: 'app-swiper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ButtonModule],
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
        loop: true,
        effect:"slide",
        grabCursor:true,
        autoplay:{
          delay: 5000
        },
        centeredSlides:true,
        slidesPerView:"auto",
        
      };
      Object.assign(swiperConstructor!, swiperOptions);
      nextButton?.addEventListener('click', () => swiperConstructor.swiper.slideNext());
      prevButton?.addEventListener('click', () => swiperConstructor.swiper.slidePrev());

    }
    this.swiperElement.set(swiperConstructor as SwiperContainer);
    if (typeof (swiperConstructor as any).initialize === 'function') {
      (swiperConstructor as any).initialize();
    }
    // this.swiperElement()?.initialize();
  }

}
