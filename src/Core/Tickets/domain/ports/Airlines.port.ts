import { AirlinesDataEntity } from "../entities/Airlines.entity";

export default interface AirlinesPort {
  listAirlines(): Promise<AirlinesDataEntity>;
}
