const defaultState = {
  id: 1,
  name: 'Africa'
}

function currentLocation (state = defaultState, action) {
  switch(action.type) {
    case 'CURRENT_REGION':
      const currentRegionState = {
        // .region.id properties from locationActions.js
        id: action.region.id,
        name: action.region.name
      };

      console.log('current region: ', currentRegionState);
      return currentRegionState;
    
    case 'CURRENT_COUNTRY':
      const currentCountryState = {
        // .country.id properties from locationActions.js
        id: action.country.id,
        name: action.country.name,
      };

      console.log('current country: ', currentCountryState);
      return currentCountryState;
    default:
      return state;
  };
};

export default currentLocation