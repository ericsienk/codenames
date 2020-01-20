import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { GridService } from '../services/grid.service';
import { CardGrid } from '../domain/card-grid';
import { Subscription } from 'rxjs';
import { ICard } from '../domain/card.interface';
import { CardType } from '../domain/card-type.enum';
import { CardRevealAction } from '../domain/card-reveal-action';
import { Actions } from '../action-bar/actions.enum';
import { ActionStack } from '../domain/action-stack';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
    public grid: CardGrid;
    private gridSubscriber: Subscription;
    public actionStack: ActionStack;
    public currentActionIndex: number;
    public overrideType: CardType;
    public options: any;
    constructor(private gridService: GridService) { }

    ngOnInit() {
        this.currentActionIndex = -1;
        this.gridSubscriber = this.gridService.getCardGrid().subscribe((grid) => {
            this.grid = grid;
            this.actionStack = new ActionStack();
        });

        this.options = {
            manual: true
        }
    }
    
    reveal(card: ICard) {
        if (this.options.manual && !this.overrideType) {
            return;
        }

        const action = new CardRevealAction(this.options.manual, this.overrideType, card, this.grid);
        this.overrideType = this.actionStack.do(action);
    }

    public flow(actionType: Actions) {
        if (actionType === Actions.UNDO) {
            this.overrideType = this.actionStack.undo(this.overrideType);
            this.currentActionIndex--;
        } else if (actionType === Actions.REDO) {
            this.currentActionIndex++;
            this.overrideType = this.actionStack.redo(this.overrideType);
        }
    }
    
    ngOnDestroy() {
        this.gridSubscriber.unsubscribe();
    }
}
