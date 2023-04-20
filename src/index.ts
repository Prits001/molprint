import { Compounds } from "./compounds.js";

interface Compound {
    compound: string;
  }

function getCompound(): Compound {
    const Index = Math.floor(Math.random() * Compounds.length);
    const compound = Compounds[Index];
    return {compound};
}
export default getCompound;