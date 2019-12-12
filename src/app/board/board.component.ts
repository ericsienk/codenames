import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridService } from '../services/grid.service';
import { CardGrid } from '../domain/card-grid';
import { Subscription } from 'rxjs';
import { ICard } from '../domain/card.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
    public grid: CardGrid;
    private subscriber: Subscription;
    
    constructor(private gridService: GridService) { 

  }

    ngOnInit() {
        this.subscriber = this.gridService.getCardGrid().subscribe((grid) => {
            this.grid = grid;
        });
    }
    
    reveal(card: ICard) {
        card.isRevealed = true;
    }
    
    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }

}
