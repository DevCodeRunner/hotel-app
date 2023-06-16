import { Booking } from "./booking";

export const Bookings: Booking[] = [
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


];