import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyecto1';

  // constructor(
  //   private titleService: Title,
  //   private metaService: Meta,
  //   ){
  //   }

  ngOnInit():void {
    // this.titleService.setTitle( "José Andrés | Frontend Developer" );

    // this.metaService.addTags([
    //   {name: 'keywords', content: 'developer, software, frontend, backend, fullstack, web, app, angular, portfolio, cv, curriculum, vitae, resume'},
    //   {name: 'description', content: 'I am a Computer Science student beginning my journey in the web development market. I can create and design solutions for any problem within both the frontend and backend. This is precisely what I have been doing in my current job.'},
    // ]);
    
    
    AOS.init();

  }
}
