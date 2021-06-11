import { inject, injectable } from "inversify";
import TariffOptionsPort from "../domain/ports/TariffOptions.port";
import TYPES from "../domain/Types";
import { TariffOptionsDataRepository } from "./datasource/TariffOptionsDataRepository";
import { TariffOptionsEntity } from "./Interfaces";

@injectable()
export default class TariffOptionsEntityAdapter implements TariffOptionsPort {
  public constructor(
    @inject(TYPES.FilterDataRepository)
    public FilterDataRepository: TariffOptionsDataRepository
  ) {}

  async tariffOptionsList(): Promise<TariffOptionsEntity> {
    return await this.FilterDataRepository.listFilters();
  }
}
