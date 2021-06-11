import CheckboxIcon from "../../../../front/app/components/common/Checkbox/CheckboxIcon.vue";
import CheckBoxIconHover from "../../../../front/app/components/common/Checkbox/CheckBoxIconHover.vue";

export enum ComponentMap {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  default = CheckboxIcon,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  hover = CheckBoxIconHover,
}

export enum Status {
  default = "default",
  hover = "hover",
}

export enum SCREEN_SIZE {
  MD = 640,
  LG = 1170,
}

export enum FILTER_ID {
  optionsId = "optionsId",
  airId = "airId",
  all = "all",
}
