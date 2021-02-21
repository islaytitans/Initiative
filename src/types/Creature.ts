export default interface Creature {
  id: number;
  name: string;
  initiative: number;
  isDefeated: boolean;
  armorClass?: number;
  hitPoints?: number;
  isPlayer?: boolean;
  PlayerName?: string;
}
