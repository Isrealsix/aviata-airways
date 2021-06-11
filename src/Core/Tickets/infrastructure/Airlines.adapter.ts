import { inject, injectable } from "inversify";
import { AirlinesDataEntity } from "../domain/entities/Airlines.entity";
import AirlinesPort from "../domain/ports/Airlines.port";
import TYPES from "../domain/Types";
import { AirlinesMapper } from "./Airlines.mapper";
import { AirlinesDataRepository } from "./datasource/AirlinesDataRepository";

@injectable()
export default class AirlinesAdapter implements AirlinesPort {
  public constructor(
    @inject(TYPES.AirlinesDataRepository)
    public airlinesDataRepository: AirlinesDataRepository
  ) {}

  async listAirlines(): Promise<AirlinesDataEntity> {
    const airlines = await this.airlinesDataRepository.listAirlines();
    return AirlinesMapper.toAirlinesEntity(airlines);
  }
}
