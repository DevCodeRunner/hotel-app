import { Injectable } from '@angular/core';
import { Bookings } from './mock-bookings';
import { Booking } from './booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { } //der HttpClient ist zum get & post befehle senden nötig

  bookingsUrl :string = "/api/bookings"; //der Endpunkt von dem wir die Daten mit get bekommen

  getBookings() : Observable<Booking[]>{

var response = this.httpClient.get<Booking[]>(this.bookingsUrl); //syntax: variable name =this.property.nimmDatenVon<Dateityp[]>(this.UrlWoDatenHerkommen)
console.log(response);
return response;
  }  
    deleteBooking(booking: Booking): void {
      var index = Bookings.indexOf(booking);
      Bookings.splice(index,1);
    }

    getBookingById(id: number) : Booking {
    var bookingById = Bookings.find(x => x.id == id)!;
    return bookingById;
    }

    addBooking(booking: Booking) : void {
      Bookings.push(booking);
    }

    updateBooking(booking: Booking) : void {
      var currentBooking = this.getBookingById(booking.id);
      currentBooking = booking;
    }
}
