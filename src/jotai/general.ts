import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { IAddress } from "../interfaces/address";

export const addressAtom = atomWithStorage<IAddress[]>("@address", []);
export const openAddModalAtom = atom<boolean>(false);
export const addressByIdAtom = atom<IAddress | undefined>(undefined);
