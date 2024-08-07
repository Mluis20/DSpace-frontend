import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { WhatIsPublishedPageComponent } from './what-is-published-page/what-is-published-page.component';
import { HowIsPublishedPageComponent } from './how-is-published-page/how-is-published-page.component';
import { DigitalRepositoryRegulationsComponent } from './digital-repository-regulations/digital-repository-regulations.component';


@NgModule({
  declarations: [
    WhatIsPublishedPageComponent,
    HowIsPublishedPageComponent,
    DigitalRepositoryRegulationsComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule
  ]
})
export class PublicationsModule { }
