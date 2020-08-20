import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getAddress = (obj, separator) =>
    Object.values(obj)
      .filter((val) => val)
      .join(separator);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      Location.reverseGeocodeAsync({ latitude, longitude }).then((data) => {
        let address = {
          street: data[0].street,
          city: data[0].city,
          region: data[0].region,
          country: data[0].country,
        };
        setLocation(getAddress(address));
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
