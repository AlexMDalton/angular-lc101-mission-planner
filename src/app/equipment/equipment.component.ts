import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipmentBeingEdited: string = null;
  equipment: string[] = ['Habitat dome','Drones','Food containers','Oxygen tanks'];

  constructor() { }

  ngOnInit() {
  }

  add(newEquipment: string){
    this.equipment.push(newEquipment);
  }

  remove(newEquipment: string){
    let index = this.equipment.indexOf(newEquipment);
    this.equipment.splice(index,1);
  }

  edit(newEquipment: string){
    this.equipmentBeingEdited = newEquipment;
  }

  save(newEquipment: string, oldEquipment: string){
    let index = this.equipment.indexOf(oldEquipment);
    this.equipment[index] = newEquipment;
    this.equipmentBeingEdited = null;
  }

}
