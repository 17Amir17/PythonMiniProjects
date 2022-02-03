import { atom } from "recoil";
import { Stats } from "../utils/types";

export const statsState = atom<Stats | undefined>({
  key: "statsState",
  default: undefined,
});
