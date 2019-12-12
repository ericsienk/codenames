import { ICard } from './card.interface';
import { CardType } from './card-type.enum';
import { CardGrid } from './card-grid';

export class CardGridBuilder {
    private grid: [ICard[]];

    constructor(private row: number, private column: number) {

    }

    words(_words: string[]): CardGridBuilder {
        this.grid = [[]];

        for (let i = 0, k = -1; i < _words.length; i++) {
            if (i % (this.row) === 0) {
                k++;
                this.grid[k] = [];
            }

            this.grid[k].push({
                type: null,
                word: _words[i],
                isRevealed: false
            });
        }

        return this;
    }

    private pickType(_types: CardType[], _typeMap: Map<CardType, number>) {
        const index = Math.floor(Math.random() * _types.length);
        const type = _types[index];
        let count = _typeMap.get(type);
        count--;

        if (!count) {
            _typeMap.delete(type);
            _types.splice(index, 1);
        } else {
            _typeMap.set(type, count);
        }

        return type;
    }

    build(_typeMap: Map<CardType, number>, _goesFirst: CardType) {
        _typeMap.set(_goesFirst, _typeMap.get(_goesFirst) + 1);
        const types: CardType[] = [..._typeMap.keys()];
        for (let row of this.grid) {
            for (let card of row) {
                card.type = this.pickType(types, _typeMap);
            }
        }

        return new CardGrid(this.grid, _goesFirst);
    }
}