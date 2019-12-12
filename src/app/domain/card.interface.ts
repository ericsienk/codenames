import { CardType } from './card-type.enum';

export interface ICard {
    word: string;
    type: CardType;
    isRevealed: boolean;
}