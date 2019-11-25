import { Melding } from "./model/melding";

export async function readLocalMeldingen(srv): Promise<Melding[]> {
  return srv.read("Melding");
}
