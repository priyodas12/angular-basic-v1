import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  downTimeStart: Date = new Date(2023, 2, 25);
  downTimeEnd: Date = new Date(2023, 2, 26);
  displayNotification: boolean = true;
}
