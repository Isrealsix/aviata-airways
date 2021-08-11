import { InjectionKey } from "vue";
import { createStore, Store, useStore } from "vuex";
import { getModule, VuexModule } from "vuex-module-decorators";
import { FilterModule } from "../../../Core/Tickets/app/store/FilterModule";
import {
  TicketsState,
  TicketsStore,
} from "../../../Core/Tickets/app/store/TicketModule";

export interface RootState {
  TicketsModule: TicketsState;
  FilterModule: FilterModule;
}

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules: {
    TicketsModule: TicketsStore,
    FilterModule: FilterModule,
  },
});

declare type ConstructorOf<C> = {
  new (...args: any[]): C;
};

export function useModule<M extends VuexModule>(
  moduleClass: ConstructorOf<M>
): M {
  const store = useStore(key);
  const moduleStore: M = getModule(moduleClass, store);
  return moduleStore;
}
