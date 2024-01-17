import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/interface/item';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent {
  @Input()
  dataList: Item[] | undefined;
  @Input() dataType: string | undefined;
  @Output() onItemDelete: EventEmitter<Item> = new EventEmitter<Item>();

  ngOnInit() {}
  delete(item: Item) {
    console.log(item);

    this.onItemDelete.emit(item);
  }
}
