<div align="center">
    <a href="https://www.npmjs.com/package/molprint"><img src="https://img.shields.io/npm/v/molprint.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/molprint"><img src="https://img.shields.io/npm/dt/molprint.svg?maxAge=3600" alt="npm downloads" /></a>
</div>

# MolPrint NPM Package
Npm package providing random chemical compounds.


## Installation
```bash
npm install molprint
```

## Use
1. **Import the package function..**
    ```ts
    import getCompound from "molprint";
    ```

2. **Call the imported function..**
    ```js
    const compound = getCompound();
    console.log(compound);
    ```
    This will output a random chemical compound with description to the console.
    `getCompound()` has an optional boolean parameter `detailed`: true by default.\n
    If `detailed`: false, only the compound will be output, without description.
    ```js
    import getCompound from "./index.js";
    console.log(getCompound(false)); 
    //Out: { compound: 'Ethanol (C2H5OH)' }
    ```
#
### If you'd like to contribute, feel free to submit a pull request.
