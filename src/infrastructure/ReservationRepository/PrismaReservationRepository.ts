import { Reservation } from "@/domain/Reservation";
import prisma from "@/infrastructure/clients/prisma";
import { ReservationRepositoryInterface } from "@/infrastructure/ReservationRepository/ReservationRepositoryInterface";

export class PrismaReservationRepository
  implements ReservationRepositoryInterface
{
  findOverlappingReservations(
    newStartDate: Date,
    newEndDate: Date
  ): Promise<Reservation[]> {
    return prisma.reservation.findMany({
      where: {
        OR: [
          { startDate: { gte: newStartDate, lte: newEndDate } },
          { endDate: { gte: newStartDate, lte: newEndDate } },
          { startDate: { lte: newStartDate }, endDate: { gte: newEndDate } },
        ],
      },
    });
  }

  saveReservation(startDate: Date, endDate: Date): Promise<Reservation> {
    return prisma.reservation.create({ data: { startDate, endDate } });
  }
}
