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
    responsive: true
  };

  chartData = [
    { data: this.medias, label: 'Turma' },
  ];

  myColors = [
    {
      backgroundColor: 'rgba(103, 58, 183, .1)',
      borderColor: 'rgb(103, 58, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
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
    this.graficoHumorService.get_grafico(1).subscribe(graficoData => {
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
