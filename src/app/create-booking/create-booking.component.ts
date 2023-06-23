import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    private bookingService:BookingService) {}

booking: Booking = {
  id: 100,
  name: "Youre Name",
  roomNumber: 100,
  startDate: new Date(),
  endDate: new Date()
}

ngOnInit(): void {
  if(this.router.url != '/create'){
  var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  var bookingById = this.bookingService.getBookingById(id);
  this.booking = bookingById;
  }
}

save(): void {
  var bookingById = this.bookingService.getBookingById(this.booking.id);
  if(bookingById == null || bookingById == undefined){
    this.bookingService.addBooking(this.booking); //Wenn kein Element vorhanden wird eins hinzugefügt
  } else {
    this.bookingService.updateBooking(this.booking) //Wenn ein Element Existiert, wird es geupdated
  }

  this.router.navigate(['bookings']);
  
 
}

dateChanged(event: Event, isStart: boolean){
  var val = (event.target as HTMLInputElement).value;

  if(isStart){
    this.booking.startDate = new Date(val);
  }
//  Date Picker binding scheint noch nicht zu funktionieren 
}
 
}
