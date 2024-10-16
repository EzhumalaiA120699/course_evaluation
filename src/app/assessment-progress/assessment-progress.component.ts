import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assessment-progress',
  templateUrl: './assessment-progress.component.html',
  styleUrls: ['./assessment-progress.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true

})
export class AssessmentProgressComponent  implements  AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    const ctx:any = (document.getElementById('assessmentProgressChart') as HTMLCanvasElement).getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Assignment', 'Quiz', 'Presentation', 'Lab'],  // X-axis labels
        datasets: [
          {
            label: 'Pending',
            data: [20, 80, 55, 40],  // Pending tasks for each category
            backgroundColor: 'rgba(128, 128, 128, 0.5)',  // Grey for Pending
            borderColor: 'rgba(128, 128, 128, 1)',
            borderWidth: 1,
            stack: 'Stack 0',  // Keep Pending tasks stacked together
          },
          {
            label: 'Completed',
            data: [50, 20, 70, 25],  // First set of completed tasks
            backgroundColor: 'rgb(126, 175, 126)',  // Green for Completed tasks
            borderColor: 'rgb(126, 175, 126)',
            borderWidth: 1,
            stack: 'Stack 1',  // Group completed tasks together
          },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              filter: function(item) {
                // Only show one "Pending" and one "Completed" legend
                return item.text === 'Pending' || item.text === 'Completed';
              }
            }
          },
          title: {
            display: true,
          }
        },
        scales: {
          x: {
            stacked: false,  // Stack datasets on the x-axis
          },
          y: {
            beginAtZero: true,
            stacked: false,  // Stack datasets on the y-axis
            ticks: {
              stepSize:20,
              callback: function(value) {
                  return value + '%'; // Adds % to y-axis labels
              }
          },
            max: 100  // Maximum value to show on the y-axis
          }
        }
      }
    });
  }

}
