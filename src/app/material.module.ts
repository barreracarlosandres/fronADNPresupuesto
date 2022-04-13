import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    ]
})

export class MaterialExampleModule {}
