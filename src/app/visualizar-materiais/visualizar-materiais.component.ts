import { Component, OnInit } from '@angular/core';
import { MateriaisService } from '../materiais/materiais.service';
import {saveAs as importedSaveAs} from "file-saver";

@Component({
  selector: 'app-visualizar-materiais',
  templateUrl: './visualizar-materiais.component.html',
  styleUrls: ['./visualizar-materiais.component.css']
})
export class VisualizarMateriaisComponent implements OnInit {

  materiais : any;
  error: any;

  constructor(private materialService: MateriaisService) {
    this.getter();
  }

  ngOnInit() {}

  getter() {
    this.materialService.get_materiais().subscribe((data:any) => {
      this.materiais = data;
      console.log(this.materiais)
    }, (error:any) => {
      this.error = error;
    });
  }

  abreArquivo(caminho){
    this.materialService.get_material(caminho).subscribe(blob => {
      importedSaveAs(blob, caminho);
    });
  }

}
