import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input () theme: string;

  @Output() readonly themeSwitch = new EventEmitter()
  @Output() sidenavToggle = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}
  
  toggleMode(e) {
    this.themeSwitch.emit()
  }
}
