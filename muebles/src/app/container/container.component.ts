import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VentadialogComponent } from '../ventadialog/ventadialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})


@Injectable()
export class ContainerComponent implements OnInit {
  animal: string;
  name: string;
  object: Object;
  lista: any;
  constructor(private http: HttpClient, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/mueblesUptc/webresources/producto').subscribe(res => {
      this.lista = res;
    },
      (error: any) => this.lista = []
    );

  }

  public load(object: Object) {
    this.object = object
    console.log(this.object);
  }


  openDialog(object:Object): void {
    console.log(object);
    sessionStorage.setItem('obj',JSON.stringify(object));
    const dialogRef = this.dialog.open(VentadialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  } 
}
