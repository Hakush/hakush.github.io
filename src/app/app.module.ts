import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InfoComponent } from './components/info/info.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
// import { PortfolioService } from './services/portfolio.service.js';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProfileComponent,
        InfoComponent,
        ExperienceComponent,
        EducationComponent,
        SkillsComponent,
        ProjectsComponent,
        FooterComponent,
        PortfolioComponent,
        LoginComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NgbModule], providers: [
            HttpClientModule,
            provideHttpClient(withInterceptorsFromDi())
        ]
})
export class AppModule { }

// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { HttpClient } from '@angular/common/http';
// import { AboutComponent } from './about/about.component';
// import { BannerComponent } from './banner/banner.component';
// import { ContactComponent } from './contact/contact.component';
// import { JobsComponent } from './jobs/jobs.component';
// import { MoreProyectsComponent } from './more-proyects/more-proyects.component';
// import { ProyectsComponent } from './proyects/proyects.component';
// import { NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
// import { CarouselModule } from 'ngx-owl-carousel-o';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// export function HttpLoaderFactory(http: HttpClient){
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }



// @NgModule({
//   declarations: [
//     HomeComponent,
//     BannerComponent,
//     AboutComponent,
//     JobsComponent,
//     ProyectsComponent,
//     MoreProyectsComponent,
//     ContactComponent,
//   ],
//   imports: [
//     CommonModule,
//     NgbNavModule,
//     CarouselModule,
//     TranslateModule.forChild({
//       loader: {
//           provide: TranslateLoader,
//           useFactory: HttpLoaderFactory,
//           deps: [HttpClient]
//       }
//     })
//   ]
// })
// export class HomeModule { }

