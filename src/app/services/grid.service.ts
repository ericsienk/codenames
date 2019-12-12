import { Injectable } from '@angular/core';
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

    constructor(private http: HttpClient, private rando: RandoUtilService) { }

    getCardGrid(): Observable<CardGrid> {
        const goesFirst = this.rando.oneSample(PLAYERS);
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
}
