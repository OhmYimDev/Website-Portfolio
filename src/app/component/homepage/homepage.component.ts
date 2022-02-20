import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  // toggle_menu() {
  //   const hamMenuBtn = this.el.nativeElement.querySelector('.header__main-ham-menu-cont');
  //   const smallMenu = this.el.nativeElement.querySelector('.header__sm-menu');
  //   const headerHamMenuBtn = this.el.nativeElement.querySelector('.header__main-ham-menu');
  //   const headerHamMenuClosebtn = this.el.nativeElement.querySelector('.header__main-ham-menu-close');
   
  //   if (smallMenu.classList.contains('header__sm-menu--active')) {
  //     smallMenu.classList.remove('header__sm-menu--active');
  //   } else {
  //     smallMenu.classList.add('header__sm-menu--active')
  //   }

  //   if (headerHamMenuBtn.classList.contains('d-none')) {
  //     headerHamMenuBtn.classList.remove('d-none')
  //     headerHamMenuClosebtn.classList.add('d-none')
  //   } else {
  //     headerHamMenuBtn.classList.add('d-none')
  //     headerHamMenuClosebtn.classList.remove('d-none')
  //   }
  // }

  

}
