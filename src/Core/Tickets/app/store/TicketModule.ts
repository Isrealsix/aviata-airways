import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { TicketEntity } from "../../domain/entities/Ticket.entity";
import TYPES from "../../domain/Types";
import { GetTicketsQuery } from "../../domain/usecases/GetTicketsQuery";
import { lazyInject } from "../../infrastructure/inversify.config";

export interface TicketsState {
  Tickets: TicketEntity[];
}

@Module({
  name: "TicketsModule",
  namespaced: true,
  stateFactory: true,
})
export class TicketsStore extends VuexModule implements TicketsState {
  @lazyInject(TYPES.GetTicketsQuery)
  private readonly getTicketsQuery!: GetTicketsQuery;
  public Tickets: TicketEntity[] = [];

  @Mutation
  setTickets(tickets: TicketEntity[]) {
    this.Tickets = tickets;
  }

  get getTickets() {
    return this.Tickets;
  }

  @Action({ rawError: true })
  async fetchTickets() {
    const tickets = await this.getTicketsQuery.getTickets();
    this.setTickets(tickets);
    return tickets;
  }
}
