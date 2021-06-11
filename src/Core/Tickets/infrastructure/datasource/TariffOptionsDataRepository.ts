import { injectable } from "inversify";
import { TariffOptionsEntity } from "../Interfaces";

@injectable()
export class TariffOptionsDataRepository {
  listFilters(): Promise<TariffOptionsEntity> {
    return Promise.resolve({
      stops: {
        id: "stops",
        title: "stops",
        text: "Только прямые",
        status: false,
        filterId: "optionsId",
      },
      baggage: {
        id: "baggage",
        title: "baggage",
        text: "Только с багажом",
        status: false,
        filterId: "optionsId",
      },
      refundable: {
        id: "refundable",
        title: "refundable",
        text: "Только возвратные",
        status: false,
        filterId: "optionsId",
      },
    });
  }
}
