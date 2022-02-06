import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';
import { Chargestation } from '../chargestation';
import { ChargestationService } from '../chargestation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(
    private chargestationservice: ChargestationService,
    private snackBar: MatSnackBar
  ) {}
  chargeStation: Chargestation[];
  latitude = 18.516726;
  longitude = 73.856255;
  icon = './assets/ico-marker.png';
  ngOnInit(): void {
    this.getStations();
  }

  getStations() {
    this.chargestationservice.getAllStations().subscribe((response) => {
      this.chargeStation = response;
    });
  }

  deleteStation(id: number) {
    this.chargestationservice.deleteStation(id).subscribe((data) => {
      this.getStations();
      console.log(data);
      this.openSnackBar('Station Deleted', 'Dismiss');
    });
  }

  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
