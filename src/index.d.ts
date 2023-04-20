import { Compounds } from "./compounds.js";

export interface Compound {
  compound: string;
}

declare function getCompound(): Compound;

export default getCompound;