import { inject, injectable } from "inversify";
import FlightsPort from "../ports/Flights.port";
import TYPES from "../Types";
import { GetTicketsQuery } from "../usecases/GetTicketsQuery";

@injectable()
export class TicketsService implements GetTicketsQuery {
  constructor(
    @inject(TYPES.FlightsPort)
    private flightsPort: FlightsPort
  ) {}

  async getTickets() {
    return await this.flightsPort.listFlights();
  }
}
