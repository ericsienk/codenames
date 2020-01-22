import { Component, OnInit, Input } from '@angular/core';
import { GridService } from 'src/app/services/grid.service';

@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.scss']
})
export class ControlBarComponent implements OnInit {
    @Input()
    private grid;

    public lockToggle: boolean = false;
  constructor(private gridService: GridService) { }

  ngOnInit() {
  }

    public rotate() {
        this.gridService.rotate(this.grid);
    }
}
 