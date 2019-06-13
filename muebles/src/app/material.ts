import {MatButtonModule,MatCheckboxModule,} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar'
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatDialogModule
    ],
    exports: [MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatDialogModule
    ]
})
export class MaterialModule { }