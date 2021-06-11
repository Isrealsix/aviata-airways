import { TicketEntity } from "../entities/Ticket.entity";

export interface GetTicketsQuery {
  getTickets(): Promise<TicketEntity[]>;
}
