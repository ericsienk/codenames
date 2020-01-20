import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CardGrid } from '../domain/card-grid';
import { ICard } from '../domain/card.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
    @Input()
    public grid: CardGrid;

    @Output() public cardSelected = new EventEmitter<ICard>();

    constructor() { }
}
