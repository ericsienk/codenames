import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    public opened: boolean = false;
  constructor() { }

  ngOnInit() {
  }

    open() {
        this.opened = true;
    }

    close() {
        this.opened = false;
    }

}
