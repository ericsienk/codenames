import { Component, OnInit } from '@angular/core';
import { GridService } from '../services/grid.service';
import { CardGrid } from '../domain/card-grid';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
    public grid: CardGrid;

  constructor(private gridService: GridService) { }

    ngOnInit() {
        const subscribe = this.gridService.getCardGrid().subscribe((grid) => {
            this.grid = grid;
            this.grid.cards.forEach(x => x.forEach(x => this.grid.reveal(x)));
            subscribe.unsubscribe();
        });
  }
}
