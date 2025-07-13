import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDialogActions,
  MatDialogContent,
  MatProgressSpinnerModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class MaterialModule { }
