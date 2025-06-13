import { CommonModule, NgClass, NgStyle, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-texto-a-maquina',
  imports: [NgClass, NgStyle, CommonModule],
  standalone: true,
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './texto-a-maquina.component.html',
  styleUrls: ['./texto-a-maquina.component.scss']
})
export class TextoAMaquinaComponent implements OnInit {

  @Input() fullText: string = '';
  @Input() typingSpeed: number = 100;
  @Input() customClass: string = '';
  @Input() customStyle: { [klass: string]: any } = {};

  displayedText: string = '';
  private currentIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)){
      
      this.typeWriterEffect();
    }
  }

  typeWriterEffect(): void {
    if (this.currentIndex < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeWriterEffect(), this.typingSpeed);
    }
  }
}