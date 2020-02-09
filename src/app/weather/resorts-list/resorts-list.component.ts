import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {IResort} from "../../models/IResort";

@Component({
  selector: 'app-resorts-list',
  templateUrl: './resorts-list.component.html',
  styleUrls: ['./resorts-list.component.css']
})
export class ResortsListComponent implements OnChanges{

  @Output('selectedResortEmitter')
  public selectedResortEmitter: EventEmitter<IResort> = new EventEmitter<IResort>();

  public selectedResort: IResort;

  public resortTypes: Set<string> = new Set<string>();

  @Input('currentResorts')
  public currentResorts: Array<IResort> = new Array<IResort>();

  constructor() {

  }

  public selectResort(resort: IResort): void {
    this.selectedResort = resort;
    this.selectedResortEmitter.emit(resort);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes || !changes.currentResorts) {
      return;
    }

    if (!Array.isArray(changes.currentResorts.currentValue)) {
      return;
    }

    let currentValue: Array<IResort> = changes.currentResorts.currentValue;

    currentValue.forEach(e => this.resortTypes.add(e.type));

    console.log(this.resortTypes);
    if (changes.currentResorts.previousValue === undefined && currentValue.length > 0) {
      this.selectedResort = currentValue[0];
      this.selectedResortEmitter.emit(this.selectedResort);
    }

  }
}
