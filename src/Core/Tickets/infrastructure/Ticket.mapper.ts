import { TicketEntity } from "../domain/entities/Ticket.entity";
import { FlightsRoot } from "./Interfaces";
import { RussianDateFormatter } from "./utils/RussianDateFormatter";
import { RussianTimeFormatter } from "./utils/RussianTimeFormatter";
import { SecondsFormatter } from "./utils/SecondsFormatter";

export class TicketMapper {
  static toTicketEntity(FlightsRoot: FlightsRoot): TicketEntity[] {
    const ticketEntity: TicketEntity[] = [];
    FlightsRoot.flights.forEach((flight) => {
      flight.itineraries.forEach((itinerary) => {
        itinerary.forEach((segment) => {
          ticketEntity.push(
            new TicketEntity(
              flight.id,
              segment.carrier_name,
              segment.carrier,
              new RussianDateFormatter().format(new Date(segment.dep_date)),
              new RussianTimeFormatter().format(new Date(segment.dep_date)),
              segment?.segments[0]?.origin_code,
              `${new SecondsFormatter(segment.traveltime).inMinuteAndHour()}`,
              segment?.segments[0]?.dest_code,
              segment?.segments[1]?.dest_code,
              segment.stops > 0
                ? `Через ${segment.segments[0].dest}, ${new SecondsFormatter(
                    segment.layovers[0]
                  ).inMinuteAndHour()}`
                : "",
              new RussianDateFormatter().format(new Date(segment.arr_date)),
              new RussianTimeFormatter().format(new Date(segment.arr_date)),
              segment.refundable,
              segment.price.currency,
              segment.price.amount,
              segment.segments[0].baggage_options.length > 0,
              segment.stops
            )
          );
        });
      });
    });
    return ticketEntity;
  }
}
