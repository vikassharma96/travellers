import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://api.jsonbin.io/",
  },
  staging: {
    apiUrl: "https://api.jsonbin.io/",
  },
  prod: {
    apiUrl: "https://api.jsonbin.io/",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
