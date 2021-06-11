import { TicketEntity } from "../entities/Ticket.entity";

export default interface FlightsPort {
  listFlights(): Promise<TicketEntity[]>;
}
