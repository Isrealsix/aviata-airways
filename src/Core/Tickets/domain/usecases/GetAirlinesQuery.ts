import { AirlinesDataEntity } from "../entities/Airlines.entity";

export interface GetAirlinesQuery {
  getAirlines(): Promise<AirlinesDataEntity>;
}
