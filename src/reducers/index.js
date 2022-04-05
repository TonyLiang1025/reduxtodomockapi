export const reudcer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD":
      return [...state, { ...payload }];
    case "MOD":
      const newStateAfterMod = [...state];
      newStateAfterMod[payload].isComplete = !state[payload].isComplete;
      return newStateAfterMod;
    case "DEL":
      return [...state.slice(0, payload), ...state.slice(payload + 1)];
    default:
      return state;
  }
};
