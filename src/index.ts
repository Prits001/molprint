import { Compounds } from "./compounds.js";

interface Compound {
  compound: string | undefined;
}

function getCompound(detailed?: boolean): Compound {
  if (detailed === false) {
    const cutStrings = Compounds.map((str) => str.split(': \n').shift());
    const Index = Math.floor(Math.random() * Compounds.length);
    const compound = cutStrings[Index];
    return { compound };

  } else {
    const Index = Math.floor(Math.random() * Compounds.length);
    const compound = Compounds[Index];
    return { compound };
  }

}
export default getCompound;