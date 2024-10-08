import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlertService, NxAlertComponent } from 'nx-demo';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule, NxAlertComponent],
  template: `
    <nx-alert></nx-alert>
    @if (showSuccessButton) {
    <button
      type="button"
      class="border-round-sm border-none p-3 btn-success"
      (click)="onSuccess()"
    >
      Success
    </button>
    } @if (showDangerButton) {
    <button
      type="button"
      class="border-round-sm border-none p-3 btn-danger"
      (click)="onDanger()"
    >
      Danger
    </button>
    } @if (showWarningButton) {
    <button
      type="button"
      class="border-round-sm border-none p-3 btn-warning"
      (click)="onWarning()"
    >
      Warning
    </button>
    }
  `,
  styles: `

  button{
    color:white;
    cursor:pointer;
  }
    .btn-success{
      background-color: rgb(67, 160, 112);
    }
    .btn-danger{
      background-color: rgb(225, 69, 69);
    }
    .btn-warning{
      background-color: rgb(217, 210, 69);
    }
  `,
})
export class AlertDemoComponent {
  @Input() showSuccessButton: boolean = false;
  @Input() showDangerButton: boolean = false;
  @Input() showWarningButton: boolean = false;

  constructor(private alertService: AlertService) {}

  onSuccess(): void {
    this.alertService.showAlert({
      type: 'success',
      message: 'Successfully Added',
    });
  }

  onDanger(): void {
    this.alertService.showAlert({
      type: 'danger',
      message: 'Internal Server Error',
    });
  }

  onWarning(): void {
    this.alertService.showAlert({
      type: 'warning',
      message: 'Invalid Request',
    });
  }
}
