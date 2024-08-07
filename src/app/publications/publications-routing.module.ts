import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatIsPublishedPageComponent } from './what-is-published-page/what-is-published-page.component';
import { HowIsPublishedPageComponent } from './how-is-published-page/how-is-published-page.component';
import { DigitalRepositoryRegulationsComponent } from './digital-repository-regulations/digital-repository-regulations.component';

const routes: Routes = [
  { path: "what-is-published", component: WhatIsPublishedPageComponent },
  { path: "how-is-published", component: HowIsPublishedPageComponent },
  { path: "digital-repository-regulations", component: DigitalRepositoryRegulationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }
