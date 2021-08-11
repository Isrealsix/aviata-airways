import { enableAutoUnmount, shallowMount } from "@vue/test-utils";
import { FILTER_ID } from "../../../Core/Tickets/app/Enums";

import { createStore } from "vuex";
import { getModule } from "vuex-module-decorators";
import { FilterModule } from "../../../Core/Tickets/app/store/FilterModule";
import AirlinesList from "./AirlinesList.vue";
import BaseTooltipIcon from "./common/icons/BaseTooltipIcon.vue";
import FilterItem from "./FilterItem.vue";

describe("AirlinesList", () => {
  enableAutoUnmount(beforeEach);
  let wrapper: any;
  let store: any;

  const fakeAirlines = [
    { id: 1, text: "Airline 1", status: true, filterId: FILTER_ID.airId },
    { id: 2, text: "Airline 2", status: false, filterId: FILTER_ID.airId },
    { id: 3, text: "Airline 3", status: true, filterId: FILTER_ID.airId },
  ];

  beforeEach(() => {
    function getModuleName(module: any): string {
      if (!module._vmdModuleName) {
        throw new Error(`ERR_GET_MODULE_NAME : Could not get module accessor.
        Make sure your module has name, we can't make accessors for unnamed modules
        i.e. @Module({ name: 'something' })`);
      }
      return module._vmdModuleName;
    }
    store = createStore({
      modules: {
        FilterModule: {
          namespaced: true,
          state: {
            filterAirlines: fakeAirlines,
          },
          actions: {
            fetchAirlines: jest.fn(),
            resetFilterId: jest.fn(),
          },
        },
      },
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const testModule = getModule(getModuleName(FilterModule, store));
    console.log(testModule, "testModule");
    wrapper = shallowMount(AirlinesList, {
      global: {
        plugins: [store],
      },
      props: {
        title: "Авиакомпании",
      },
    });
  });

  it("should render", () => {
    expect(wrapper.find(".flex").exists()).toBe(true);
  });

  it("should render the correct number of filter items", () => {
    expect(wrapper.findAllComponents(FilterItem).length).toBe(
      fakeAirlines.length
    );
  });

  it("should call the resetFilterId action when the reset icon is clicked", () => {
    wrapper.find("div[ref='hoverRef']").trigger("click");
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch.mock.calls[0][0]).toMatch(
      "/filterStore/resetFilterId/"
    );
  });

  it("should call the fetchAirlines action on mount", () => {
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch.mock.calls[1][0]).toMatch(
      "/filterStore/fetchAirlines/"
    );
  });

  it("should render the tooltip icon", () => {
    expect(wrapper.findComponent(BaseTooltipIcon).exists()).toBe(true);
  });
});

//
//
// it.todo(`  <div @click.stop.prevent="resetFilterSelected">`);
// it.todo(`  <div ref="hoverRef" `);
// it.todo(`  const resetFilterSelected = () => {
//   filterStore.resetFilterId(FILTER_ID.airId); `);
//
// it.todo('v-for="filter in filters" :key="filter.id"');
//
// it.todo(' v-if="filter.filterId.includes(FILTER_ID.airId)"');
