'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const result = [];
  let newState = { ...state };

  for (const action of actions) {
    if (action.type === 'clear') {
      newState = {};
    }

    if (action.type === 'addProperties') {
      Object.assign(newState, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete newState[key];
      }
    }

    result.push({ ...newState });
  }

  return result;
}

module.exports = transformStateWithClones;
