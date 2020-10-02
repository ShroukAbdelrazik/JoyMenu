import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //#region Declarations
  menuList: object[] = [
    {
      item: 'home',
      label: 'Home',
      path: '/home',
    },
    {
      item: 'allResturants',
      label: 'All Resturants',
      path: '/resturants/all',
    },
    {
      item: 'offers',
      label: 'Offers',
      path: '/offers',
    },
    {
      item: 'becomePartner',
      label: 'Become a partner',
      path: '/becomePartner',
    },
  ];
  currentLang: string;
  isEngLang: boolean;
  //#endregion

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadInit();
  }
  loadInit() {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
    this.isEngLang = this.currentLang === 'en';
    this.changeDirection();
  }

  changeCurrentLang() {
    this.swapLanguage();
  }
  swapLanguage() {
    let current = localStorage.getItem('currentLang') || 'en';
    switch (current) {
      case 'en':
        this.setLanguage('ar');
        break;
      case 'ar':
        this.setLanguage('en');
        break;

      default:
        this.setLanguage('en');
        break;
    }
  }
  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    this.isEngLang = lang === 'en';
    this.changeDirection();
  }
  changeDirection() {
    if (this.isEngLang) {
      this.document.body.style.direction = 'ltr';
      this.document.documentElement.lang = 'en';
      this.document.documentElement.dir = 'ltr';
    } else {
      this.document.body.style.direction = 'rtl';
      this.document.documentElement.lang = 'ar';
      this.document.documentElement.dir = 'rtl';
    }
  }
}
