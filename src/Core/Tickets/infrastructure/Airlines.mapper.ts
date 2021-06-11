import {
  AirlinesDataEntity,
  AirlinesEntity,
} from "../domain/entities/Airlines.entity";
import { Airlines } from "./Interfaces";

export class AirlinesMapper {
  static toAirlinesEntity(airlines: Airlines): AirlinesDataEntity {
    const airlinesSet: AirlinesDataEntity = {};
    Object.entries(airlines).forEach(([key, value]) => {
      airlinesSet[key] = new AirlinesEntity(key, key, value, false, "airId");
    });
    return airlinesSet;
  }
}
