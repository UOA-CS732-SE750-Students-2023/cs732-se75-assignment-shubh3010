import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  catFact: any;
  dataToChildComponent = 'Data successfully passed from dashboard component to here'
  friendslist = [
    {
      name: 'Nishant',
      age: 25
    },
    {
      name: 'Shailesh',
      age: 45
    },
    {
      name: 'Abhishek',
      age: 36
    },
    {
      name: 'Akshay',
      age: 65
    },
    {
      name: 'Ashish',
      age: 12
    },
    {
      name: 'Uday',
      age: 31
    },
    {
      name: 'Mayank',
      age: 45
    },
    {
      name: 'Raju',
      age: 74
    },
  ];
  isVisible: boolean = false;
  displayMessage = 'Click to View List'
  constructor(
    // Dependency injection of router and service is done in component's constructor
    private router: Router,
    private _snackBar: MatSnackBar,
    private dashboardService: DashboardService
  ) { }


  // In angular lifecycle below method always runs first when the component is initialized
  ngOnInit(): void {
    console.log('on it initializes in the start');
    this.getCatData();
  }


  openSnackBar(message: string, action: string) {
    this.getCatData();
    this._snackBar.open(message, action);     // Material library default Method to open toaster message
  }


  routeToCharts() {
    this.router.navigate(['/dashboard/chart']); // navigation to previous page
  }

  getCatData() {
    // calling method from servie using observable to get data from API
    this.dashboardService.getCatData().subscribe((response: any) => {
      this.catFact = response;
    }, err => console.log('Call cat error Error', err))

  }

  hideList() {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.displayMessage = 'Click to Hide List'
    } else {
      this.displayMessage = 'Click to View List'

    }

  }

}
