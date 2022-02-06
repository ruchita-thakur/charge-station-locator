import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddStationComponent } from '../add-station/add-station.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  openAddStationDialog(): void {
    let dialogRef = this.dialog.open(AddStationComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.openSnackBar('Station Added', 'Navigate')
          .onAction()
          .subscribe(() => {
            this.goToStations();
          });
      }
    });
  }

  goToStations() {
    this.router.navigate(['/locations']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, { duration: 5000 });
  }
}
