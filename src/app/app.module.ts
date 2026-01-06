import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
// import { PortfolioService } from './services/portfolio.service.js';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        ProfileComponent,
        AboutComponent,
        ExperienceComponent,
        EducationComponent,
        ProjectsComponent,
        FooterComponent,
        PortfolioComponent,
        ContactComponent
    ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NgbModule,
    ],
    providers: [
        HttpClientModule,
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }

