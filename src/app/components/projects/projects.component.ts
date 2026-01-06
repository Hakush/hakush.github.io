import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    protected projects: any;

    constructor(private datosPortfolio: PortfolioService) { }

    ngOnInit(): void {
        // Traer datos de JSON en carpeta assets/
        this.datosPortfolio.obtenerDatos().subscribe(data => {
            this.projects = data.projects;
            this.projects.reverse();
        });
    }

}
