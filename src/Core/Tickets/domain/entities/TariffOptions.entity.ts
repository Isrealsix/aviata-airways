import { FilterEntity } from "./Filter.entity";

class TariffOptionsEntity extends FilterEntity {
  constructor(
    id: string,
    title: string,
    text: string,
    status: boolean,
    filterId: string
  ) {
    super(id, title, text, status, filterId);
  }
}
