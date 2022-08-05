import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experimentsBeingEdited: string = null;
  experiments: string[] = ['Mars soil sample','Plant growth in habitat','Human bone density'];

  constructor() { }

  ngOnInit() {
  }

  add(newExperiment: string){
    this.experiments.push(newExperiment);
  }

  remove(newExperiment: string){
    let index = this.experiments.indexOf(newExperiment);
    this.experiments.splice(index,1);
  }

  edit(newExperiment: string){
    this.experimentsBeingEdited = newExperiment;
  }

  save(newExperiment: string, oldExperiment: string){
    let index = this.experiments.indexOf(oldExperiment);
    this.experiments[index] = newExperiment;
    this.experimentsBeingEdited = null;
  }

}
