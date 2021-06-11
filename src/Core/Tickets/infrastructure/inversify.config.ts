import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import "reflect-metadata";
import AirlinesPort from "../domain/ports/Airlines.port";
import FlightsPort from "../domain/ports/Flights.port";
import TariffOptionsPort from "../domain/ports/TariffOptions.port";
import { FilterService } from "../domain/service/FilterService";
import { TicketsService } from "../domain/service/TicketsService";
import TYPES from "../domain/Types";
import { GetAirlinesQuery } from "../domain/usecases/GetAirlinesQuery";
import { GetTariffOptionsQuery } from "../domain/usecases/GetTariffOptionsQuery";
import { GetTicketsQuery } from "../domain/usecases/GetTicketsQuery";
import AirlinesAdapter from "./Airlines.adapter";
import { AirlinesDataRepository } from "./datasource/AirlinesDataRepository";
import { FlightsDataRepository } from "./datasource/FlightsDataRepository";
import { TariffOptionsDataRepository } from "./datasource/TariffOptionsDataRepository";
import FlightAdapter from "./Flight.adapter";
import TariffOptionsEntityAdapter from "./TariffOptionsEntity.adapter";

const container = new Container();
container.bind<FlightsPort>(TYPES.FlightsPort).to(FlightAdapter);
container
  .bind<TariffOptionsPort>(TYPES.TariffOptionsPort)
  .to(TariffOptionsEntityAdapter);
container.bind<AirlinesPort>(TYPES.AirlinesPort).to(AirlinesAdapter);
container
  .bind<FlightsDataRepository>(TYPES.FlightsDataRepository)
  .to(FlightsDataRepository);
container
  .bind<TariffOptionsDataRepository>(TYPES.FilterDataRepository)
  .to(TariffOptionsDataRepository);
container
  .bind<AirlinesDataRepository>(TYPES.AirlinesDataRepository)
  .to(AirlinesDataRepository);
container.bind<GetAirlinesQuery>(TYPES.GetAirlinesQuery).to(FilterService);
container.bind<GetTicketsQuery>(TYPES.GetTicketsQuery).to(TicketsService);
container
  .bind<GetTariffOptionsQuery>(TYPES.GetTariffOptionsQuery)
  .to(FilterService);
const { lazyInject } = getDecorators(container);
export { lazyInject, container };
