import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: object[] = [
    { items: "Habitat dome" },
    { items: "Drone" },
    { items: "Food containers" },
    { items: "Oxygen Tanks" },
  ]

  itemBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(newItems: string) {
    this.equipment.push({ items: newItems });
  }

  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  edit(item: object) {
    this.itemBeingEdited = item;
  }

  save(items: string, item: object) {
    item['items'] = items;
    this.itemBeingEdited = null;
  }

}
