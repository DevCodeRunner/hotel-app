//Dieser Service ist das Sinnbild für den Server der Anwendung und soll die Mockdaten ablösen. Der Service funktioniert wie eine billig variante eines Webservers
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

createDb() {
  const bookings: Booking[] = [
    {
      id : 1,
      name : "Emanuel Reuther",
      roomNumber : 100,
      startDate : new Date(),
      endDate : new Date("2021-07-23")
    },
    {
        id : 2,
        name : "Max Mustermann",
        roomNumber : 22,
        startDate : new Date("2023-05-23"),
        endDate : new Date("2023-6-02")
      },
      {
        id : 3,
        name : "James Bond",
        roomNumber : 74,
        startDate : new Date("2023-02-01"),
        endDate : new Date("2023-02-14")
      },
      {
        id : 4,
        name : "Kazuto Kirigaya",
        roomNumber : 79,
        startDate : new Date("2022-11-06"),
        endDate : new Date("2024-11-07")
      }
    ]
    return bookings;
}

  constructor() { }
}
