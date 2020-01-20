import { ICard } from "./card.interface";
import { CardType } from './card-type.enum';
import { CardGrid } from './card-grid';

export class CardRevealAction {
    initialType: CardType;

    public constructor(private manual: boolean, private overrideType: CardType, private card: ICard, private grid: CardGrid) {
        this.initialType = this.card.type;
    }

    public do() {
        let newOverrideType = this.overrideType;
        if (this.manual && !this.overrideType) {
            return;
        }

        this.grid.reveal(this.card, this.overrideType);
        if (this.manual && this.overrideType && this.grid.isEmpty(this.overrideType)) {
            newOverrideType = undefined;
        }

        return newOverrideType
    }

    public undo() {
        let newOverrideType;

        if (this.manual && !this.overrideType) {
            return;
        }

        if (this.manual && this.overrideType && this.grid.isEmpty(this.overrideType)) {
            newOverrideType = this.overrideType;
        }

        this.grid.cover(this.card, this.overrideType);

        return newOverrideType;
    }
}