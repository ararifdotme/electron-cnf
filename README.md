# electron-cnf

**Lightweight package for managing Electron settings and configuration data**

`electron-cnf` is a lightweight utility module designed to simplify the management of configuration variables in Electron applications. It provides easy-to-use functions for retrieving, setting, unsetting, and clearing configuration variables stored in a JSON file.

---

## Installation

```bash
npm install electron-cnf
````

---

## Usage (JavaScript)

```javascript
const electronCnf = require('electron-cnf');

// Get a config variable
const value = electronCnf.getCnf('key', 'defaultValue');

// Get all config variables
const allConfig = electronCnf.getAllCnf();

// Set a config variable
electronCnf.setCnf('key', 'value');

// Set multiple config variables
electronCnf.setCnfMulti({ key1: 'value1', key2: 'value2' });

// Unset a config variable
electronCnf.unsetCnf('key');

// Clear all config variables
electronCnf.clearCnf();
```

---

## Usage (TypeScript)

TypeScript is supported via built-in type declarations. Just import functions directly:

```ts
import {
  getCnf,
  setCnf,
  getAllCnf,
  setCnfMulti,
  unsetCnf,
  clearCnf
} from 'electron-cnf';

// Example usage
const theme = getCnf('theme', 'light');
setCnf('theme', 'dark');
console.log(getAllCnf());
```

📝 **Note:** Be sure to use this module **after** Electron's `app.whenReady()` to avoid runtime errors.

---

## Example

```javascript
const { app } = require('electron');
const electronCnf = require('electron-cnf');

app.whenReady().then(() => {
  const cnfValue = electronCnf.getCnf('exampleVariable', 'defaultValue');
  console.log('Config Value:', cnfValue);
});
```

---

## License

This project is licensed under the MIT License.
