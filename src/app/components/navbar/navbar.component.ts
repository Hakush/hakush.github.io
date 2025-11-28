import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  scrolled = false;

  ngOnInit(): void {
    this.scrolled = window.pageYOffset > 0;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.pageYOffset > 0;
  }
}
