import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ChartConfiguration, ChartDataset, ChartOptions, Color } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  title = 'ng2-charts-demo';

  // X axis labels for the line chart
   lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],

    // Data to the chart
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40,44,90 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  constructor() {
  }

  ngOnInit() {
  }

}