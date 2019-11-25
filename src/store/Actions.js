import * as storeConstants from './Consts';

export const loadDataFromSessionStorage = loadedState => {
  return ({
    type: storeConstants.LOAD,
    loadedState,
})}