import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule, MatChipsModule, MatCardModule, MatGridListModule, MatListModule} from '@angular/material';


@NgModule({
  exports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatGridListModule, MatListModule],
  imports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatGridListModule, MatListModule],
})
export class MaterialModule { }
