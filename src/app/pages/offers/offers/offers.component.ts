import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  //#region Definitions
  pageNo: number = 1;
  itemsPerPage: number = 8;
  //#endregion

  constructor() {}

  ngOnInit(): void {}
}
