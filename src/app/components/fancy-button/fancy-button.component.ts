import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fancy-button',
  templateUrl: './fancy-button.component.html',
  styleUrls: ['./fancy-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FancyButtonComponent {
  @Input() name: string;
  @Input() route: string;

  @Output() routeChange = new EventEmitter<any>();
  constructor() { }



}
