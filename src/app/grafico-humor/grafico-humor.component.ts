import { Component, OnInit } from '@angular/core';
import { GraficoHumorService } from './grafico-humor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmaService } from '../turmas/turma.service';

@Component({
  selector: 'app-grafico-humor',
  templateUrl: './grafico-humor.component.html',
  styleUrls: ['./grafico-humor.component.css']
})
export class GraficoHumorComponent implements OnInit {
  medias = [1];
  datas = [];
  id = 1;
  turma = '';

  chartLabels = ['Janeiro', 'Fevereiro'];

  chartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              max: 5,
              min: 0,
              stepSize: 1
          }
        }],
      xAxes:[{
        display: false
      }]
  }
  };

  chartData = [
    { data: this.medias, label: 'Média' },
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

  constructor(private turmaService: TurmaService, private graficoHumorService: GraficoHumorService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        const turma$ = this.turmaService.getById(this.id)
        turma$.subscribe(turma => {
          this.updateLabel(turma);
        });
      }
    );
    this.getter();
    // this.buildChart();
    // this.iniciaGrafico();
  }

  updateLabel(turma){
    this.turma = turma.descricao;
  }

  onChartClick(event) {
    console.log(event);
  }

  ngOnInit() {
    this.getter();
  }

  return() {
    this.router.navigate(['turmas']);
  }

  getter() {
    this.graficoHumorService.get_grafico(this.id).subscribe(graficoData => {
      this.medias = graficoData.medias;
      this.datas = graficoData.datas;
      console.log(graficoData)
      console.log(this.medias);
      console.log(this.datas);
      this.chartData = [
        { data: this.medias, label: 'Média' },
      ];
      this.chartLabels = this.datas;
      // this.baseChart.update();
    })
  }
}
