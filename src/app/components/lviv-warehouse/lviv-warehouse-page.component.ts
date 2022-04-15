import { Component } from '@angular/core';
import {Chart} from "chart.js";

@Component({
  selector: 'lviv-warehouse-app',
  templateUrl: './lviv-warehouse-page.component.html',
  styleUrls: ['./lviv-warehouse-page.component.css'],
})
export class LvivWarehousePageComponent {
  panelOpenState = false;

  ngOnInit() {
    // Bar chart
    const barCanvasEle: any = document.getElementById('bar_chart')
    const barChart = new Chart(barCanvasEle.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень'],
        datasets: [{
          label: 'Переміщення з складу',
          data: [31, 46, 15, 37, 84, 53, 18],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
