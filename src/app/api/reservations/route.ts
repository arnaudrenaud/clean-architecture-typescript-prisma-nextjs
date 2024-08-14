import { z } from "zod";
import { PrismaReservationRepository } from "@/infrastructure/ReservationRepository/PrismaReservationRepository";
import { MakeReservation } from "@/commands/MakeReservation";

const makeReservation = MakeReservation(new PrismaReservationRepository());

const MakeReservationArguments = z.object({
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
});

export const POST = async (request: Request) => {
  const body = MakeReservationArguments.safeParse(await request.json());

  if (!body.success) {
    return Response.json(
      {
        errorMessage: body.error,
      },
      { status: 400 }
    );
  }

  try {
    return Response.json({
      reservation: await makeReservation(
        new Date(body.data.startDate),
        new Date(body.data.endDate)
      ),
    });
  } catch (error) {
    return Response.json(
      {
        errorMessage: (error as Error).message,
      },
      { status: 400 }
    );
  }
};
