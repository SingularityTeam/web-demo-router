import { constants } from '.';

export const changeCollapsed = () => ({
  type: constants.CHANGE_COLLAPSED
});

export const changeKeyPath = keyPath => ({
  type: constants.CHANGE_KEYPATH,
  keyPath
});
