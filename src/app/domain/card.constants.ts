import { CardType } from './card-type.enum';

export const PLAYERS: CardType[] = [
    CardType.RED_AGENT,
    CardType.BLUE_AGENT
];

export const PLAYER_DESCRIPTION_MAP = (() => {
    const map = {};
    map[CardType.RED_AGENT] = 'Red Agent';
    map[CardType.BLUE_AGENT] = 'Blue Agent';
    map[CardType.BYSTANDER] = 'Innocent Bystander';
    map[CardType.ASSASSIN] = 'Assassin';
    return map;
})();
