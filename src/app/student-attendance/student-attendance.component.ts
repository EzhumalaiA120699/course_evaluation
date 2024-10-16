import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true
})
export class StudentAttendanceComponent implements AfterViewInit {

  constructor() {
    // Register Chart.js components (scales, elements, controllers, etc.)
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.renderAttendanceChart();
  }

  renderAttendanceChart() {
    // Get the canvas element by id and its context
    const ctx:any = (document.getElementById('attendanceChart') as HTMLCanvasElement).getContext('2d');
    
    // Initialize the Chart with the canvas context
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1/7', '8/7', '15/7', '22/7', '29/7', '5/8', '12/8', '19/8', '26/8', '2/9', '9/9','16/9', '23/9', '30/9', '14/10', '21/10'],
        datasets: [{
          label: 'Attendance',
          data: [25, 50, 18, 82, 55, 85, 60, 35, 90, 70, 65, 90, 85, 60, 75],
          borderColor: '#800080',
          fill: false,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Attendance',  // Overall X-axis title
              font: {
                size: 14,  // Optional: Change font size for the x-axis title
                weight: 'bold'  // Optional: Make the x-axis title bold
              }
            },
            ticks: {
              stepSize:20,
              callback: function(value) {
                  return value + '%'; // Adds % to y-axis labels
              }
          },
            max: 100
          },
          x:{
            title: {
              display: true,
              text: 'Weeks',  // Overall X-axis title
              font: {
                size: 14,  // Optional: Change font size for the x-axis title
                weight: 'bold'  // Optional: Make the x-axis title bold
              }
            }
          }
          
        },
        plugins:{
          legend: {
            display: false  // Hide the legend
          }
        }
      }
    });
  }
}
