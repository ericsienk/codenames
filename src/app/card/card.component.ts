import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICard } from '../domain/card.interface';
import { RandoUtilService } from '../services/rando-util.service';
import { CardType } from '../domain/card-type.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
    @Input() card: ICard;
    public imgUrl: string;
    public backgroundImage: string;
    constructor(private rando: RandoUtilService) { }

    ngOnInit() { 

    }

    getRandomImageNumber() {
        let max = 1;
        if (this.card.type === CardType.RED_AGENT || this.card.type === CardType.BLUE_AGENT) {
            max = 8;
        } else if (this.card.type === CardType.BYSTANDER) {
            max = 11;
        }

        return this.rando.range(1, max);
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        this.imgUrl = `assets/cards/${this.card.type}_${this.getRandomImageNumber()}.jpg`;
        this.backgroundImage = 'url(' + this.imgUrl + ')';
    }
}
