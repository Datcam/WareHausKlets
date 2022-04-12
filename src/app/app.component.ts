import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WarehouseKlets';

  navigateTo(url: string): void {
    window.location.href = url;
  }
}
