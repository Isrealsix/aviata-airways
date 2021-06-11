import { TariffOptionsEntity } from "../../infrastructure/Interfaces";

export default interface TariffOptionsPort {
  tariffOptionsList(): Promise<TariffOptionsEntity>;
}
