import { Melding } from "./model/melding";

export function serviceHandler(srv) {
  srv.on("READ", "TeamCalendar", req => {
    // enfore presence of key (for now)
    const year: number = req.data.year;

    if (!year) {
      req.reject(
        400,
        "No key found in the request URL! Please provide a key, e.g. by calling the endpoint like this: /TeamCalendar(2019)."
      );
    }

    return readMeldingen(srv)
      .then(req.reply)
      .catch(error => {
        req.reject(
          500,
          "An error occured while trying to read appointments: " + error.message
        );
      });
  });
}
