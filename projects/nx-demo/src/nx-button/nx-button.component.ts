import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nx-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nx-button.component.html',
  styleUrl: './nx-button.component.scss',
})
export class NxButtonComponent {
  @Input() label!: string;
  @Input() styleClass!: 'danger' | 'success' | 'warning';
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
