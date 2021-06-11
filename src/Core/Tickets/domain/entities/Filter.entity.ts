export class FilterEntity {
  constructor(
    public id: string,
    public title: string,
    public text: string,
    public status: boolean,
    public filterId: string
  ) {}
}
