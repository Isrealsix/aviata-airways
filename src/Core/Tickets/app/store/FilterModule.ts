import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { AirlinesDataEntity } from "../../domain/entities/Airlines.entity";
import { FilterEntity } from "../../domain/entities/Filter.entity";
import TYPES from "../../domain/Types";
import { GetAirlinesQuery } from "../../domain/usecases/GetAirlinesQuery";
import { GetTariffOptionsQuery } from "../../domain/usecases/GetTariffOptionsQuery";
import { TariffOptionsEntity } from "../../infrastructure/Interfaces";
import { lazyInject } from "../../infrastructure/inversify.config";
import { FILTER_ID } from "../Enums";

export interface FilterState {
  FilterAirlines: AirlinesDataEntity;
  FilterOptions: TariffOptionsEntity;
  selectedFilters: Set<FilterEntity>;
}

interface FilterService {
  handleFilter(id: string): void;
  handleAllFilter(): void;
  filterByCode(filter: FilterEntity): void;
  resetFilters(): void;
  resetFilterId(filterId: string): void;
  selectAllFilters(): void;
}

@Module({
  name: "FilterModule",
  namespaced: true,
  stateFactory: true,
})
export class FilterModule
  extends VuexModule
  implements FilterState, FilterService
{
  @lazyInject(TYPES.GetAirlinesQuery)
  private readonly GetAirlinesQuery!: GetAirlinesQuery;
  @lazyInject(TYPES.GetTariffOptionsQuery)
  private readonly GetTariffOptionsQuery!: GetTariffOptionsQuery;

  public FilterAirlines: AirlinesDataEntity = {};
  public FilterOptions: TariffOptionsEntity = {};
  public selectedFilters: Set<FilterEntity> = new Set();

  get getFilterAirlines() {
    return this.FilterAirlines;
  }

  get getFilterOptions() {
    return this.FilterOptions;
  }

  get getSelectedFilters() {
    return this.selectedFilters;
  }

  @Mutation
  setAirlines(Airlines: AirlinesDataEntity) {
    this.FilterAirlines = Airlines;
  }

  @Mutation
  setFilterOptions(FiltersOptions: TariffOptionsEntity) {
    this.FilterOptions = FiltersOptions;
  }

  @Action({ rawError: true })
  handleAllFilter() {
    for (const filter of Object.values(this.FilterAirlines)) {
      filter.status = true;
      this.selectedFilters.add(filter);
    }
  }

  @Action({ rawError: true })
  filterByCode(filter: FilterEntity): void {
    filter.status = !filter.status;
    if (this.selectedFilters.has(filter)) {
      this.selectedFilters.delete(filter);
    } else {
      this.selectedFilters.add(filter);
    }
  }

  @Action({ rawError: true })
  handleFilter(id: string) {
    if (id === FILTER_ID.all) {
      this.handleAllFilter();
    } else {
      const filter = this.FilterAirlines[id] || this.FilterOptions[id];
      if (filter) {
        this.filterByCode(filter);
      }
    }
  }

  @Action({ rawError: true })
  selectAllFilters() {
    if (this.selectedFilters.size === Object.keys(this.FilterAirlines).length) {
      this.selectedFilters.clear();
      for (const filter of Object.values(this.FilterAirlines)) {
        filter.status = false;
      }
      return;
    }
    for (const filter of Object.values(this.FilterAirlines)) {
      filter.status = true;
      this.selectedFilters.add(filter);
    }
  }

  @Action({ rawError: true })
  resetFilters() {
    this.selectedFilters.clear();
    for (const filter of Object.values(this.FilterAirlines)) {
      filter.status = false;
    }
    for (const filter of Object.values(this.FilterOptions)) {
      filter.status = false;
    }
  }

  @Action({ rawError: true })
  resetFilterId(filterId: string) {
    for (const filter of Object.values(this.FilterAirlines).concat(
      Object.values(this.FilterOptions)
    )) {
      if (filter.filterId === filterId) {
        filter.status = false;
        this.selectedFilters.delete(filter);
      }
    }
  }

  @Action({ rawError: true })
  async fetchAirlines() {
    const Airlines = await this.GetAirlinesQuery.getAirlines();
    this.setAirlines(Airlines);
    return Airlines;
  }

  @Action({ rawError: true })
  async fetchTariffOptions() {
    const TariffOptions = await this.GetTariffOptionsQuery.getTariffOptions();
    this.setFilterOptions(TariffOptions);
    return TariffOptions;
  }
}
