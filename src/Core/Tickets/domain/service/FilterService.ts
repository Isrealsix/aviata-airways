import { inject, injectable } from "inversify";
import { TariffOptionsEntity } from "../../infrastructure/Interfaces";
import { AirlinesDataEntity } from "../entities/Airlines.entity";
import AirlinesPort from "../ports/Airlines.port";
import TariffOptionsPort from "../ports/TariffOptions.port";
import TYPES from "../Types";
import { GetAirlinesQuery } from "../usecases/GetAirlinesQuery";
import { GetTariffOptionsQuery } from "../usecases/GetTariffOptionsQuery";

export interface FilterServiceI {
  handleFilter(id: string): void;
}

@injectable()
export class FilterService implements GetAirlinesQuery, GetTariffOptionsQuery {
  constructor(
    @inject(TYPES.AirlinesPort)
    private AirlinesPort: AirlinesPort,
    @inject(TYPES.TariffOptionsPort)
    private TariffOptionsPort: TariffOptionsPort
  ) {}

  private setFieldFilterData(filterData: AirlinesDataEntity) {
    return {
      all: {
        id: "all",
        title: "Все",
        text: "Все",
        status: false,
        filterId: "airId",
      },
      ...filterData,
    };
  }

  async getAirlines(): Promise<AirlinesDataEntity> {
    const filterData = await this.AirlinesPort.listAirlines();
    return this.setFieldFilterData(filterData);
  }

  async getTariffOptions(): Promise<TariffOptionsEntity> {
    return await this.TariffOptionsPort.tariffOptionsList();
  }
}
