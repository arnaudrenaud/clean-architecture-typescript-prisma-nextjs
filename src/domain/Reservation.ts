export type Reservation = {
  id: string;
  startDate: Date;
  endDate: Date;
};

export enum ReservationExceptions {
  END_DATE_MUST_BE_AFTER_START_DATE = "END_DATE_MUST_BE_AFTER_START_DATE",
  DATES_MUST_NOT_OVERLAP_EXISTING_RESERVATION = "DATES_MUST_NOT_OVERLAP_EXISTING_RESERVATION",
}

export function validateReservation(startDate: Date, endDate: Date): void {
  if (endDate <= startDate) {
    throw new Error(ReservationExceptions.END_DATE_MUST_BE_AFTER_START_DATE);
  }
}
