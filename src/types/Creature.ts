export default interface Creature {
    id: number;
    name: string;
    initiative: number;
    armorClass: number;
    hitPoints: number;
    isPlayer: boolean;
    PlayerName?: string;
    isDefeated: boolean;
}