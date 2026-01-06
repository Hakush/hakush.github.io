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

  scrollToSectionWithOffset(id: string, offset: number): void {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
