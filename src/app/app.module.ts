import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactInfoComponent } from './components/resume/contact-info/contact-info.component';
import { CoverLetterComponent } from './components/resume/cover-letter/cover-letter.component';
import { WorkHistoryEntryComponent } from './components/resume/work-history-entry/work-history-entry.component';
import { ExperienceComponent } from './components/resume/experience/experience.component';
import { ProfessionalContactsComponent } from './components/resume/professional-contacts/professional-contacts.component';
import { PersonalProjectsComponent } from './components/about-me/personal-projects/personal-projects.component';
import { MusingsComponent } from './components/musings/musings.component';
import { MusingTemplateComponent } from './components/musings/musing-template/musing-template.component';
import { PersonalInfoComponent } from './components/about-me/personal-info/personal-info.component';
import { PersonalBioComponent } from './components/about-me/personal-bio/personal-bio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    ResumeComponent,
    ContactInfoComponent,
    CoverLetterComponent,
    WorkHistoryEntryComponent,
    ExperienceComponent,
    ProfessionalContactsComponent,
    PersonalProjectsComponent,
    MusingsComponent,
    MusingTemplateComponent,
    PersonalInfoComponent,
    PersonalBioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
