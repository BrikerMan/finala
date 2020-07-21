const initialState = {
  resources: {},
  currentResource: null,
};

/**
 * @param {object} state module state
 * @param {object} action to apply on state
 * @returns {object} new copy of state
 */
export function resources(state = initialState, action) {
  switch (action.type) {
    case "CLEAR_RESOURCE":
      state.currentResource = null;
      return { ...state };
    case "SET_RESOURCE":
      state.currentResource = action.data;
      return { ...state };
    case "RESOURCE_LIST":
      state.resources = { ...action.data };
      return { ...state };
    default:
      return state;
  }
}
