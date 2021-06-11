import { inject, injectable } from "inversify";
import { TicketEntity } from "../domain/entities/Ticket.entity";
import FlightsPort from "../domain/ports/Flights.port";
import TYPES from "../domain/Types";
import { FlightsDataRepository } from "./datasource/FlightsDataRepository";
import { TicketMapper } from "./Ticket.mapper";

@injectable()
export default class FlightAdapter implements FlightsPort {
  public constructor(
    @inject(TYPES.FlightsDataRepository)
    public flightsDataRepository: FlightsDataRepository
  ) {}

  async listFlights(): Promise<TicketEntity[]> {
    const flights = await this.flightsDataRepository.listFlights();
    return Promise.resolve(TicketMapper.toTicketEntity(flights));
  }
}
