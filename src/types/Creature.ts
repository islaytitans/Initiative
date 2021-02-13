export default interface Creature {
    name: string;
    initiative: number;
    armorClass: number;
    hitPoints: number;
    isPlayer: boolean;
    PlayerName?: string;
    isDead: boolean;
}