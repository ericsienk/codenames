import { ICard } from './card.interface';
import { CardType } from './card-type.enum';

export class CardGrid {
    public typeMap: Map<CardType, number>;
    constructor(public cards: [ICard[]], public goesFirst: CardType) {
        this.typeMap = new Map<CardType, number>();
        for (let rows of cards) {
            for (let card of rows) {
                this.typeMap.set(card.type, (this.typeMap.get(card.type) || 0) + 1);
            }
        }
    }

    public reveal(card: ICard, overrideType: CardType = card.type) {
        card.type = overrideType;
        this.typeMap.set(card.type, this.typeMap.get(card.type) - 1);
        card.isRevealed = true;
    }

    public cover(card: ICard, overrideType: CardType = card.type) {
        card.type = overrideType;
        this.typeMap.set(card.type, this.typeMap.get(card.type) + 1);
        card.isRevealed = false;
    }

    public typeRemaining(type: CardType): number {
        return this.typeMap.get(type);
    }

    public isEmpty(type: CardType): boolean {
        return this.typeMap.get(type) < 1;
    }
}