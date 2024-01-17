import { Component } from '@angular/core';
import { Item } from 'src/interface/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'moviesongproject';
  Book: string = 'Book';
  Song: string = 'Song';

  constructor() {}

  ngOnInit() {}
  dataBook: Item[] = [];
  dataSong: Item[] = [];
  onItemAdded(item: any) {
    console.log(item);

    if (item.type === 'Book') {
      this.dataBook.push(item);
      console.log(this.dataBook);
    } else if (item.type === 'Song') {
      this.dataSong.push(item);
    }
  }

  onItemDelete(item: any) {
    console.log(item);

    if (item.type === 'Book') {
      this.dataBook = this.dataBook.filter((d) => d.name !== item.name);
      console.log(this.dataBook);
    } else if (item.type === 'Song') {
      this.dataSong = this.dataSong.filter((d) => d.name !== item.name);
      console.log(this.dataSong);
    }
  }
}
