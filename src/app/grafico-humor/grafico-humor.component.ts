import { Component, OnInit } from '@angular/core';
import { GraficoHumorService } from './grafico-humor.service';

@Component({
  selector: 'app-grafico-humor',
  templateUrl: './grafico-humor.component.html',
  styleUrls: ['./grafico-humor.component.css']
})
export class GraficoHumorComponent implements OnInit {
  medias = [];
  datas = [];
  
  chartOptions = {
    responsive: true
  };
  
  chartData = [
    { data: [330, 600, 260, 700], label: 'Turma' },
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
  }

  onChartClick(event) {
    console.log(event);
  }

  ngOnInit() {
  }

  getter() {
    this.graficoHumorService.get_grafico().subscribe(graficoData => {
      this.medias = graficoData.medias;
      this.datas = graficoData.datas;
    })
  }
}
