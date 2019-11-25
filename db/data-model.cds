namespace alliander.KLIC;

entity Melding {
  key ID                    : Integer;
      klicNummer            : Integer;
      dataSendToAddress     : String;
      relatieNummer         : Date;
      contactNaam           : Time;
      contactTelefoonnummer : String;
      contactEmail          : String;
      referentieMeldingNr   : String;
      referentieVolgNr      : String;
      typeMelding           : String;
      gebiedsPolygoon       : String;
      locatieStraat         : String;
      locatieHuisnummer     : String;
      locatiePostcode       : String;
      locatiePlaats         : String;
      aanvraagTimestap      : Timestamp;
}

entity OrderBevestiging {
  key ID                     : Integer;
      klicNummer             : Integer;
      processVerwerkingsCode : String;
      severityCode           : String;
      meldingCode            : String;
      meldingOmschrijving    : String;
      orderID                : Integer;
      klantReferentie        : String;
      bevestigingTimestamp   : Timestamp;
      aanvraagTimestamp      : Timestamp;
}

entity BetrokkenBeheerders {
  key ID                         : Integer;
      klicNummer                 : Integer;
      processVerwerkingsCode     : String;
      severityCode               : String;
      klantReferentie            : String;
      veiligheidsGebiedBetrokken : String;
      bevestigingTimestamp       : Timestamp;
      aanvraagTimestamp          : Timestamp;
      betrokkenBeheerders        : String; //TODO: <TYPE BEHEERDER>
}