import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Chargestation } from '../chargestation';
import { ChargestationService } from '../chargestation.service';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css'],
})
export class AddStationComponent implements OnInit {
  chargestation: Chargestation = new Chargestation();

  constructor(
    private chargestationservice: ChargestationService,
    private router: Router,
    private dialogRef: MatDialogRef<AddStationComponent>
  ) {}

  ngOnInit(): void {}

  saveStation() {
    this.chargestationservice.createStation(this.chargestation).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
  onSubmit() {
    this.saveStation();
    this.dialogRef.close(this.chargestation);
  }
  dismiss() {
    this.dialogRef.close(null);
  }
  goToStations() {
    this.router.navigate(['/locations']);
  }
}
