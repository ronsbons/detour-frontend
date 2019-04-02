export function currentRegion (region) {
  return {
    type: 'CURRENT_REGION',
    region: {
      id: region._id,
      name: region.regionName  
    },
  };
};

export function currentCountry (country) {
  return {
    type: 'CURRENT_COUNTRY',
    country: {
      id: country._id,
      name: country.countryName
    },
  };
};