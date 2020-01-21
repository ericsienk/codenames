import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    @Output()
    public closeEvent = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

    newGameBoard() {
        this.closeEvent.emit();
        this.router.navigateByUrl('/reload', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/game']);
        }); 
    }

    newAnswerBoard() {
        this.closeEvent.emit();
        this.router.navigate(['/answers'])
    }
 
}
