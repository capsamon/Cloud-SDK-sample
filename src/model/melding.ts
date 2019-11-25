export interface Melding {
  ID                    : number;
  klicNummer            : number;
  dataSendToAddress     : string;
  relatieNummer         : string | null;
  contactNaam           : string | null;
  contactTelefoonnummer : string | null;
  contactEmail          : string | null;
  referentieMeldingNr   : string | null;
  referentieVolgNr      : string | null;
  typeMelding           : string | null;
  gebiedsPolygoon       : string | null;
  locatieStraat         : string | null;
  locatieHuisnummer     : string | null;
  locatiePostcode       : string | null;
  locatiePlaats         : string | null;
  aanvraagTimestap      : Date;
}
