import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  //#region Declarations
  company: object[] = [
    {
      label: 'About Us',
      item: 'aboutus',
      path: '/',
    },
    {
      label: 'Become a partner',
      item: 'becomePartner',
      path: '/',
    },
    {
      label: 'Terms Of Use',
      item: 'tesrmsOfUse',
      path: '/',
    },
    {
      label: 'Privacy Policy',
      item: 'privacy',
      path: '/',
    },
  ];
  social: object[] = [
    {
      label: 'Facebook',
      item: 'facebook',
      path: '/',
    },
    {
      label: 'Twitter',
      item: 'twitter',
      path: '/',
    },
    {
      label: 'Youtube',
      item: 'youtube',
      path: '/',
    },
    {
      label: 'Instagram',
      item: 'instagram',
      path: '/',
    },
  ];
  //#endregion

  constructor() {}

  ngOnInit(): void {}
}
