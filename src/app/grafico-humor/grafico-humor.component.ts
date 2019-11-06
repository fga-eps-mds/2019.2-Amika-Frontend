import { Component, OnInit } from '@angular/core';
import { GraficoHumorService } from './grafico-humor.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafico-humor',
  templateUrl: './grafico-humor.component.html',
  styleUrls: ['./grafico-humor.component.css']
})
export class GraficoHumorComponent implements OnInit {
  medias = [1];
  datas = [];

  chartLabels = ['January', 'February'];
  
  chartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              max: 5,
              min: 0,
              stepSize: 1
          }
      }]
  }
  };

  chartData = [
    { data: this.medias, label: 'Turma' },
  ];

  myColors = [
    {
      backgroundColor: 'rgb(4, 147, 147, .2)',
      borderColor: 'rgb(4, 147, 147)',
      pointBackgroundColor: 'rgb(4, 147, 147)',
      pointBorderColor: 'rgb(4, 147, 147)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(4, 147, 147)'
    },
    // ...colors for additional data sets
  ];

  constructor(private graficoHumorService: GraficoHumorService) {
    this.getter();
    // this.buildChart();
    // this.iniciaGrafico();
  }

  onChartClick(event) {
    console.log(event);
  }

  ngOnInit() {
    this.getter();
  }

  getter() {
    this.graficoHumorService.get_grafico(turma).subscribe(graficoData => {
      this.medias = graficoData.medias;
      this.datas = graficoData.datas;
      console.log(graficoData)
      console.log(this.medias);
      console.log(this.datas);
      this.chartData = [
        { data: this.medias, label: 'Turma' },
      ];
      this.chartLabels = this.datas;
      // this.baseChart.update();
    })
  }
}
