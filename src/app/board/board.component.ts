import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
    private grid: string[][];
    constructor() { 
        this.grid = [];
        
        this.grid.push(['Knees', 'Fish', 'Antarctica', 'Brown', 'Cow']);
        this.grid.push(['Knees', 'Fish', 'Flow', 'Brown', 'Cow']);
        this.grid.push(['Knees', 'Fish', 'Flow', 'Brown', 'Cow']);
        this.grid.push(['Knees', 'Fish', 'Flow', 'Brown', 'Cow']);
        this.grid.push(['Knees', 'Fish', 'Flow', 'Brown', 'Cow']);

  }

  ngOnInit() {
  }

}
