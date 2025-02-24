import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {

  @Input() columns: { key: string; label: string }[] = [];
  @Input() data: any[] = [];

}
