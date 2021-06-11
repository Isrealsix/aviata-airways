import { injectable } from "inversify";
import { FlightsRoot } from "../Interfaces";
import FlightsData from "./data/results.json";

@injectable()
export class FlightsDataRepository {
  listFlights(): Promise<FlightsRoot> {
    return Promise.resolve(FlightsData);
  }
}
