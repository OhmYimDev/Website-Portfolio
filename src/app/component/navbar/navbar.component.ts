import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private el : ElementRef) { }

  ngOnInit(): void {
  }

  toggle_menu() {
    const hamMenuBtn = this.el.nativeElement.querySelector('.header__main-ham-menu-cont');
    const smallMenu = this.el.nativeElement.querySelector('.header__sm-menu');
    const headerHamMenuBtn = this.el.nativeElement.querySelector('.header__main-ham-menu');
    const headerHamMenuClosebtn = this.el.nativeElement.querySelector('.header__main-ham-menu-close');
    const headerSmallMenuLinks = this.el.nativeElement.querySelectorAll('.header__sm-menu-link');
    if (smallMenu.classList.contains('header__sm-menu--active')) {
      smallMenu.classList.remove('header__sm-menu--active');
    } else {
      smallMenu.classList.add('header__sm-menu--active')
    }

    if (headerHamMenuBtn.classList.contains('d-none')) {
      headerHamMenuBtn.classList.remove('d-none')
      headerHamMenuClosebtn.classList.add('d-none')
    } else {
      headerHamMenuBtn.classList.add('d-none')
      headerHamMenuClosebtn.classList.remove('d-none')
    }

    for (let i = 0; i < headerSmallMenuLinks.length; i++) {
      headerSmallMenuLinks[i].addEventListener('click', () => {
        smallMenu.classList.remove('header__sm-menu--active')
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuClosebtn.classList.add('d-none')
    })
  }

  }
}
