import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ResultsComponent } from './results.component';


@NgModule({
  imports:[
    SharedModule
  ],
  declarations:[
    ResultsComponent
  ],
  providers: []
})
export class ResultsModule {}