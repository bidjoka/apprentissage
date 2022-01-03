import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RandomPipe } from 'src/app/partage/pipe/RandomPipe';



@NgModule({
  declarations: [
    RandomPipe
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RandomPipe
  ],
})
export class PartageModule { }
