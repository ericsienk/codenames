import { ICard } from './card.interface';
import { CardType } from './card-type.enum';

export class CardGrid {
    constructor(public cards: [ICard[]], public goesFirst: CardType) {

    }
}