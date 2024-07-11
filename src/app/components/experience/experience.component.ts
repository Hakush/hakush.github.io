import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
    experiences: any;

    constructor(private datosPortfolio: PortfolioService) {

    }

    ngOnInit(): void {
        // Traer datos de JSON en carpeta assets/
        this.datosPortfolio.obtenerDatos().subscribe(data => {
            this.experiences = data.experiencias;
        });
    }
}
