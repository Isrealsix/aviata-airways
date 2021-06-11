import { injectable } from "inversify";
import { Airlines } from "../Interfaces";
import FlightsData from "./data/results.json";

@injectable()
export class AirlinesDataRepository {
  listAirlines(): Promise<Airlines> {
    return Promise.resolve(FlightsData.airlines);
  }
}
