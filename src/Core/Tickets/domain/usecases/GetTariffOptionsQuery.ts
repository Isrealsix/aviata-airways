import { TariffOptionsEntity } from "../../infrastructure/Interfaces";

export interface GetTariffOptionsQuery {
  getTariffOptions(): Promise<TariffOptionsEntity>;
}
