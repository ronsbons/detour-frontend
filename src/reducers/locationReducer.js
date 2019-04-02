const defaultState = {
  id: 1,
  name: 'Africa'
}

function currentLocation (state = defaultState, action) {
  switch(action.type) {
    case 'CURRENT_REGION':
      const newState = {
        id: action.region.id,
        name: action.region.name
      };

      console.log('current region: ', newState);
      return newState;
    default:
      return state;
  };
};

export default currentLocation