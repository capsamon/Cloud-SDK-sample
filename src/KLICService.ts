import { readLocalMeldingen } from "./readMeldingen";

export function serviceHandler(srv) {
  srv.on("READ", "Melding", req => {
    return readLocalMeldingen(srv)
      .then(req.reply)
      .catch(error => {
        req.reject(
          500,
          "An error occured while trying to read appointments: " + error.message
        );
      });
  });
}
