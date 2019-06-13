import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../container/container.component';

@Component({
  selector: 'app-ventadialog',
  templateUrl: './ventadialog.component.html',
  styleUrls: ['./ventadialog.component.css']
})
export class VentadialogComponent {

   object:any;

  constructor(
    public dialogRef: MatDialogRef<VentadialogComponent>,
    @Inject(MAT_DIALOG_DATA) public datad: DialogData) {

if(sessionStorage.getItem('obj')){
  this.object = JSON.parse(sessionStorage.getItem('obj'));
console.log(this.object);
}

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
