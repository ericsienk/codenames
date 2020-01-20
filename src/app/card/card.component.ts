import { Component, OnInit, Input, OnChanges, SimpleChanges, KeyValueDiffers } from '@angular/core';
import { ICard } from '../domain/card.interface';
import { RandoUtilService } from '../services/rando-util.service';
import { CardType } from '../domain/card-type.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() card: ICard;
    public cachedType: CardType;
    public imgUrl: string;
    public backgroundUrl: string;
    cardDiffer: any;
    constructor(private rando: RandoUtilService, private differs: KeyValueDiffers) { }

    ngOnInit() {
        this.cardDiffer = this.differs.find(this.card).create();
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

    ngDoCheck(): void {
        const changes = this.cardDiffer.diff(this.card);
        if (changes) {
            this.imgUrl = `assets/cards/${this.card.type}_${this.getRandomImageNumber()}.jpg`;
            // this.backgroundUrl = 'url(' + this.imgUrl + ')';
        }
    }
}
