export interface Booking { //Da es sich um ein Interface handelt sind alle dinge in Bookings Pflichtfelder und müssen demnach ausgefüllt werden
    id: number;
    name: string;
    roomNumber: number;
    startDate: Date;
    endDate: Date;
}