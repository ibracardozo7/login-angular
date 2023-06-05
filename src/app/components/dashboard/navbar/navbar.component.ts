import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu: Menu[] | null = null
  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.cargarMenu()
  }

  cargarMenu() {
    this.menuService.getMenu()
    .subscribe(data => {
      console.log(data);
      this.menu = data
    })
  }
}
