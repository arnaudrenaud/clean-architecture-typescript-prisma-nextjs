import { Reservation } from "@/domain/Reservation";

export interface ReservationRepositoryInterface {
  findOverlappingReservations(
    startDate: Date,
    endDate: Date
  ): Promise<Reservation[]>;
  saveReservation(startDate: Date, endDate: Date): Promise<Reservation>;
}
