import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/services/person.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  miPortfolio:any;
  persona: person = new person('X',23,'X','X','','','','','','');

  constructor(private datosPortfolio:PortfolioService, public personaService: PersonService) {

  }

  ngOnInit():void {
    // Traer datos de JSON en carpeta assets/
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.persona = data;
    });

    // Traer datos con llamada a la API getProfile, que trae a la persona con id = 1
    // this.personaService.getPerson().subscribe(data => {
    //   this.persona = data;
    // });
  }
}
