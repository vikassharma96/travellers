import client from "./client";

const getTravellers = () => client.get("/b/5f350767bf24ad02bef166e7");

export default {
  getTravellers,
};
