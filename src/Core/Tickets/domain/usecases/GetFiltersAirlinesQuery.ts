import { AirlinesDataEntity } from "../entities/Airlines.entity";

export interface GetFiltersAirlinesQuery {
  getFiltersAirlines(): AirlinesDataEntity;
}
