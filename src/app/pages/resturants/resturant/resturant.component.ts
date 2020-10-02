import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.scss'],
})
export class ResturantComponent implements OnInit {
  @HostBinding('@.disabled') disabled = true;

  constructor() {}

  ngOnInit(): void {}
}
