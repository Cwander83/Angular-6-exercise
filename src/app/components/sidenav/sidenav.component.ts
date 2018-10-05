import { Component, OnInit } from '@angular/core';

/** @title Fixed sidenav */
@Component({
  selector: 'app-sidenavcomponent',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() {}

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h =>
    h.test(window.location.host)
  );
  ngOnInit() { }
}
