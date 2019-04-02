export function currentRegion (region) {
  return {
    type: 'CURRENT_REGION',
    region: {
      id: region._id,
      name: region.locationName  
    }
  }
}