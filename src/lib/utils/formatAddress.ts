import { Address } from "../../components/Coffee/types";

export const formatAddress = (
  place: google.maps.places.PlaceResult
): Partial<Address> => {
  if (place.address_components) {
    const address = place.address_components.reduce<Partial<Address>>(
      (prev, curr) => {
        let key = curr.types[0];
        if (key.includes("administrative_area")) {
          return prev;
        }
        if (key === "route") {
          key = "street";
        } else if (key === "locality") {
          key = "city";
        }
        return {
          ...prev,
          [key]: curr.long_name,
        };
      },
      {}
    );

    const lat = `${place.geometry?.location?.lat()}`;
    const lng = `${place.geometry?.location?.lng()}`;

    return { ...address, lat, lng };
  } else {
    return {};
  }
};
