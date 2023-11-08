import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Main',
      url: '/menu/main',
      icon: 'home',
    },
    {
      title: 'Cool frameworks',
      open: false,
      children: [
        {
          title: 'Ionic',
          url: '/menu/ionic',
          icon: 'logo-ionic',
        },
        {
          title: 'Flutter',
          url: '/menu/flutter',
          icon: 'logo-google',
        },
        {
          title: 'React',
          url: '/menu/react',
          icon: 'logo-ionic',
        },
        {
          title: 'Angular',
          url: '/menu/angular',
          icon: 'logo-google',
        },
      ],
    },
    {
      title: 'Cool frameworks2',
      open: false,
      children: [
        {
          title: 'Django',
          url: '/menu/django',
          icon: 'logo-ionic',
        },
        {
          title: 'Firebase',
          url: '/menu/firebase',
          icon: 'logo-google',
        },
        {
          title: 'AWS',
          url: '/menu/aws',
          icon: 'logo-ionic',
        },
        {
          title: 'expressjs',
          url: '/menu/expressjs',
          icon: 'logo-google',
        },
      ],
    },
  ];

  constructor(private menuCtrl: MenuController) {}




  ngOnInit() {}
  toggleMenu() {
    this.menuCtrl.toggle(); // Ini akan membuka atau menutup menu
  }
}
