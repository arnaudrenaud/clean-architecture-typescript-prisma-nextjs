import {
  ReservationExceptions,
  validateReservation,
} from "@/domain/Reservation";
import { ReservationRepositoryInterface } from "@/infrastructure/ReservationRepository/ReservationRepositoryInterface";

export const MakeReservation =
  (reservationRepository: ReservationRepositoryInterface) =>
  async (startDate: Date, endDate: Date) => {
    validateReservation(startDate, endDate);

    if (
      (
        await reservationRepository.findOverlappingReservations(
          startDate,
          endDate
        )
      ).length
    ) {
      throw new Error(
        ReservationExceptions.DATES_MUST_NOT_OVERLAP_EXISTING_RESERVATION
      );
    }

    return reservationRepository.saveReservation(startDate, endDate);
  };
