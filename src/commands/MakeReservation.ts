import { validateReservation } from "@/domain/Reservation";

export const makeReservation = async (startDate: Date, endDate: Date) => {
  validateReservation(startDate, endDate);

  // if it overlaps existing reservation, throw exception
  // else, save reservation
};
