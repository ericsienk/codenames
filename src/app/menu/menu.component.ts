import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CardType } from '../domain/card-type.enum';
import { GridService } from '../services/grid.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    @Output()
    public closeEvent = new EventEmitter();
  constructor(private router: Router, private gridService: GridService) { }

  ngOnInit() {
  }

    newGameBoard(type: CardType) {
        this.gridService.rigNextPlayerThatGoesFirst(type);
        this.closeEvent.emit();
        this.router.navigateByUrl('/reload', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/game']);
        }); 
    }

    newGameBoardBlue() { this.newGameBoard(CardType.BLUE_AGENT); }
    newGameBoardRed() { this.newGameBoard(CardType.RED_AGENT); }

    newAnswerBoard(type: CardType) {
        this.gridService.rigNextPlayerThatGoesFirst(type);
        this.closeEvent.emit();
        this.router.navigateByUrl('/reload', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/answers']);
        }); 
    }
 
    newAnswerBoardBlue() { this.newAnswerBoard(CardType.BLUE_AGENT); }
    newAnswerBoardRed() { this.newAnswerBoard(CardType.RED_AGENT); }
}
