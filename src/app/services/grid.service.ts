import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CardGrid } from '../domain/card-grid';
import { CardGridBuilder } from '../domain/card-grid-builder';
import { CardType } from '../domain/card-type.enum';
import { PLAYERS } from '../domain/card.constants';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RandoUtilService } from './rando-util.service';

@Injectable({
  providedIn: 'root'
})
export class GridService {
    private renderer: Renderer2;
    private nextGoesFirst: CardType | undefined;

    constructor(private http: HttpClient,
        @Inject(DOCUMENT) private document: Document,
        rendererFactory: RendererFactory2,
        private rando: RandoUtilService) {
            this.renderer = rendererFactory.createRenderer(null, null);
    }
    
    rigNextPlayerThatGoesFirst(player: CardType) {
        this.nextGoesFirst = player;
    }

    getCardGrid(): Observable<CardGrid> {
        const goesFirst = this.nextGoesFirst || this.rando.oneSample(PLAYERS);
        this.nextGoesFirst = undefined;
        const typeMap = new Map<CardType, number>();
        typeMap.set(CardType.BLUE_AGENT, 8);
        typeMap.set(CardType.RED_AGENT, 8);
        typeMap.set(CardType.BYSTANDER, 7);
        typeMap.set(CardType.ASSASSIN, 1);

        return this.http.get('assets/wordlist.json').pipe(
            map((data: string[]) => {
                const words = this.rando.sample(data.filter(d => d), 25).map(word => {
                    console.log(word);
                    return word.trim().toLowerCase();
                });

                return new CardGridBuilder(5, 5).words(words).build(typeMap, goesFirst);
            })
        );
    }

    setBackground(grid: CardGrid) {
        this.renderer.removeClass(this.document.body, CardType.RED_AGENT);
        this.renderer.removeClass(this.document.body, CardType.BLUE_AGENT);

        if (grid.goesFirst === CardType.RED_AGENT) {
            this.renderer.addClass(this.document.body, CardType.RED_AGENT);
        } else if (grid.goesFirst === CardType.BLUE_AGENT) {
            this.renderer.addClass(this.document.body, CardType.BLUE_AGENT);
        }
    }

    rotate(grid: CardGrid) {
        const matrix = grid.cards;
        const n = matrix.length;
        const x = Math.floor(n/ 2);
        const y = n - 1;
        for (let i = 0; i < x; i++) {
            for (let j = i; j < y - i; j++) {
                let k = matrix[i][j];
                matrix[i][j] = matrix[y - j][i];
                matrix[y - j][i] = matrix[y - i][y - j];
                matrix[y - i][y - j] = matrix[j][y - i]
                matrix[j][y - i] = k;
            }
        }
    }
}
