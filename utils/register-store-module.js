export default function registerStoreModule({ module, moduleName, store }) {
  // eslint-disable-next-line no-underscore-dangle
  const moduleIsRegistered = store._modules.root._children[moduleName] !== undefined;
  const stateExists = store.state[moduleName];

  if (!moduleIsRegistered) store.registerModule(moduleName, module, { preserveState: stateExists });
}
