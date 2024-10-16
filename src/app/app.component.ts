import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ShivamElec';
  navItems = [
    { name: 'Home', path: '/' },
    { name: 'User Master', path: '/user-master' },
    { name: 'Product Detail', path: '/product-detail' },
    { name: 'Product Master', path: '/product-master' },
  ];
  items: any[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        path: '/',
        icon: 'pi pi-home',
      },
      {
        label: 'User Master',
        path: '/user-master',
        icon: 'pi pi-star',
      },
      {
        label: 'Product Master',
        path: '/product-master',
        icon: 'pi pi-envelope',
      },
      // {
      //   label: 'Projects',
      //   icon: 'pi pi-search',
      //   items: [
      //     {
      //       label: 'Components',
      //       icon: 'pi pi-bolt',
      //     },
      //     {
      //       label: 'Blocks',
      //       icon: 'pi pi-server',
      //     },
      //     {
      //       label: 'UI Kit',
      //       icon: 'pi pi-pencil',
      //     },
      //     {
      //       label: 'Templates',
      //       icon: 'pi pi-palette',
      //       items: [
      //         {
      //           label: 'Apollo',
      //           icon: 'pi pi-palette',
      //         },
      //         {
      //           label: 'Ultima',
      //           icon: 'pi pi-palette',
      //         },
      //       ],
      //     },
      //   ],
      // },
    ];
  }
}
