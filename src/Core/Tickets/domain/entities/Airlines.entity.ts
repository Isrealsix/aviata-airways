import { FilterEntity } from "./Filter.entity";

export interface AirlinesDataEntity {
  [key: string]: AirlinesEntity;
}

export class AirlinesEntity extends FilterEntity {
  constructor(
    public id: string,
    public title: string,
    public text: string,
    public status: boolean,
    public filterId: string
  ) {
    super(id, title, text, status, filterId);
  }
}
