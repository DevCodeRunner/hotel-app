import { Component } from '@angular/core';
import { Booking } from '../booking';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {

booking: Booking = {
  id: 100,
  name: "Youre Name",
  roomNumber: 100,
  startDate: new Date(),
  endDate: new Date()
}

}