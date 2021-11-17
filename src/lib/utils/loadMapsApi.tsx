export const loadAutocompleteApi = (
  inputElement: HTMLInputElement
): google.maps.places.Autocomplete => {
  const center = { lat: 47.38022751044705, lng: 8.528475575463064 };
  // Create a bounding box with sides ~10km away from the center point
  const defaultBounds = {
    north: center.lat + 0.1,
    south: center.lat - 0.1,
    east: center.lng + 0.1,
    west: center.lng - 0.1,
  };

  const options = {
    bounds: defaultBounds,
    componentRestrictions: { country: "ch" },
    fields: ["address_components", "geometry", "icon", "name"],
    origin: center,
    strictBounds: false,
    types: ["establishment"],
  };
  const autocomplete = new window.google.maps.places.Autocomplete(
    inputElement,
    options
  );
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    console.log("place", place);
  });
  return autocomplete;
};
