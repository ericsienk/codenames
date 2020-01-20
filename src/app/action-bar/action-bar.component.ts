import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardGrid } from 'src/app/domain/card-grid';
import { CardType } from 'src/app/domain/card-type.enum';
import { Actions } from './actions.enum';
import { ActionStack } from 'src/app/domain/action-stack';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
    @Input() grid: CardGrid;
    @Input() actionStack: ActionStack;
    @Output() public flow = new EventEmitter<Actions>();
    @Output() typeChange = new EventEmitter<CardType>();
    public selectedType: CardType;
    public typeList: CardType[];
    public undo: Actions = Actions.UNDO;
    public redo: Actions = Actions.REDO;
    constructor() {

    }

    @Input()
    get type() {
        return this.selectedType;
    }

    set type(val) {
        if (this.grid.isEmpty(val)) {
            this.selectedType = undefined;
        } else {
            this.selectedType = val;
            this.typeChange.emit(this.selectedType);
        }
    }


    ngOnInit() {
        this.typeList = [CardType.RED_AGENT, CardType.BLUE_AGENT, CardType.BYSTANDER, CardType.ASSASSIN];
    }
}
