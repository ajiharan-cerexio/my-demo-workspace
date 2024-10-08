import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  Inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'nx-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nx-alert.component.html',
  styleUrl: './nx-alert.component.scss',
})
export class NxAlertComponent implements OnInit, OnDestroy {
  alert: any;
  private clearTimeout: any;
  @Input() timer: number = 5000;

  constructor(private alertService: AlertService) {
    this.alert = this.alertService.alert;
    effect(() => {
      if (this.alert()) {
        this.clearTimeout = setTimeout(() => this.close(), this.timer); // Auto close after 5 seconds
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.clearTimeout) {
      clearTimeout(this.clearTimeout);
    }
  }

  close() {
    this.alertService.clear();
  }
}
