import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/services/person.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  miPortfolio:any;
  persona: person = new person('',23,'','','','','','https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U','','');

  constructor(private datosPortfolio:PortfolioService, public personaService: PersonService) {

  }

  ngOnInit():void {
    // LLamada antigua a datos de un json
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.persona = data;
    });

    // llamada a getProfile que retorna la persona con id = 1;
    // this.personaService.getPerson().subscribe(data => {
    //   this.persona = data;
    // });
  }
}
