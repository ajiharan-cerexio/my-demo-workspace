import { computed, Injectable, signal } from '@angular/core';

export interface IAlert {
  type: 'success' | 'info' | 'warning' | 'danger';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSignal = signal<IAlert | null>(null);

  public alert = computed(() => this.alertSignal());

  constructor() {}

  showAlert(alert: IAlert): void {
    this.alertSignal.set(alert);
  }

  clear() {
    this.alertSignal.set(null);
  }
}
