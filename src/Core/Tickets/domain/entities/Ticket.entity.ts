export class TicketEntity {
  constructor(
    private readonly id_flight: string,
    private readonly carrier_name: string,
    public carrier: string,
    private dep_date_day: string,
    private dep_date_hour: string,
    private origin_code: string,
    private traveltime: string,
    private segments_dest_code: string,
    private segments1_dest_code: string,
    private layovers: string,
    private arr_date_day: string,
    private arr_date_hour: string,
    private refundable: boolean,
    private price_currency: string,
    private price_amount: string,
    private baggage: boolean,
    private stops: number
  ) {}
}
