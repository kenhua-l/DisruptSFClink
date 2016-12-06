const initialState = {
  user: null, // 'individual', 'enterprise'
};

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case "APP_LOGIN":
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }

}
