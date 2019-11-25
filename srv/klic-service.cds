using alliander.KLIC as klic from '../db/data-model';

service KLICService {
  entity Melding as projection on klic.Melding;
  entity OrderBevestiging  @readonly as projection on klic.OrderBevestiging;
  entity BetrokkenBeheerders  @readonly as projection on klic.BetrokkenBeheerders;
}
