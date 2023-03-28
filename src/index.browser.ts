import { createConsola } from "./consola";
import BrowserReporter from "./reporters/browser";

export * from "./index.shared";

function _createConsola() {
  const consola = createConsola({
    reporters: [new BrowserReporter({})],
  });
  return consola;
}

export const consola = (globalThis.consola =
  globalThis.consola || _createConsola());

export default consola;