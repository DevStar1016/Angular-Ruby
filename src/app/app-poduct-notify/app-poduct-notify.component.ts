import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-app-poduct-notify',
  templateUrl: './app-poduct-notify.component.html',
  styleUrl: './app-poduct-notify.component.css',
})
export class AppPoductNotifyComponent {
  @Input() item: Product | undefined;
  @Output() notify = new EventEmitter();
}
